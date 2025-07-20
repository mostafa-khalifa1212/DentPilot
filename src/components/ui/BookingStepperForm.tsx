"use client";

import { useState, useEffect } from "react";
import Stepper, { Step } from "./Stepper";
import { DatePicker } from "@heroui/date-picker";
import { CalendarDate } from "@internationalized/date";
import { useBooking } from "@/contexts/BookingContext";

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

export default function BookingStepperForm({ onClose }: { onClose?: () => void }) {
  const { showAlert } = useBooking();
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [clinic, setClinic] = useState("");
  const [email, setEmail] = useState("");
  const [preferredDate, setPreferredDate] = useState<CalendarDate | null>(null);
  const [preferredTime, setPreferredTime] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(5);

  // Validation state
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Countdown effect for auto-close
  useEffect(() => {
    if (submitted && step === 4) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            if (onClose) onClose();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [submitted, step, onClose]);

  // Validation logic
  const validateStep = (stepNum: number) => {
    if (stepNum === 1) {
      return name.trim().length >= 2 && clinic.trim().length >= 2;
    }
    if (stepNum === 2) {
      return (
        email.trim().length > 0 &&
        /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())
      );
    }
    if (stepNum === 3) {
      return !!preferredDate && preferredTime.trim().length > 0;
    }
    return true;
  };

  // Error messages
  const getFieldError = (field: string) => {
    if (!touched[field]) return null;
    if (field === "name" && name.trim().length < 2) return "Name is required (min 2 chars)";
    if (field === "clinic" && clinic.trim().length < 2) return "Clinic name is required (min 2 chars)";
    if (field === "email" && (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim()))) return "Valid email is required";
    if (field === "preferredDate" && !preferredDate) return "Date is required";
    if (field === "preferredTime" && !preferredTime) return "Time is required";
    return null;
  };

  // Style override for HeroUI date-picker popover
  const datePickerPopoverStyle = `
    .heroui-date-picker-popover {
      background: #18181b !important;
      z-index: 99999 !important;
      box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25);
      border-radius: 1rem;
    }
  `;

  // Helper to display CalendarDate as string
  const getDateString = (date: CalendarDate | null) => {
    if (!date) return "";
    // CalendarDate to native Date for display
    const jsDate = date.toDate("UTC");
    return jsDate.toLocaleDateString();
  };

  // Helper to get YYYY-MM-DD string
  const getDateISO = (date: CalendarDate | null) => {
    if (!date) return "";
    return date.toString(); // CalendarDate's toString() is YYYY-MM-DD
  };

  // Handler for step change
  const handleStepChange = async (nextStep: number) => {
    setError(null);
    
    // On step 3 -> 4, submit to backend
    if (step === 3 && nextStep === 4) {
      setLoading(true);
      setError(null);
      
      try {
        const res = await fetch("http://localhost:8888/.netlify/functions/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            clinicName: clinic,
            preferredDate: getDateISO(preferredDate),
            preferredTime,
          }),
        });

        if (res.status === 201) {
          // Success - show success alert and proceed to step 4
          const dateString = getDateString(preferredDate);
          showAlert({
            type: 'success',
            message: `Successfully booked a call at ${dateString} ${preferredTime}`,
            duration: 6000
          });
          setSubmitted(true);
          setStep(nextStep);
        } else if (res.status === 409) {
          // Duplicate entry
          showAlert({
            type: 'error',
            message: 'You have already booked a call under this name',
            duration: 8000
          });
          setError("You have already booked a call under this name");
        } else if (res.status === 400) {
          // Bad request
          const data = await res.json();
          showAlert({
            type: 'error',
            message: data.message || 'Invalid booking data. Please check your information.',
            duration: 6000
          });
          setError(data.message || "Invalid booking data");
        } else if (res.status === 500) {
          // Server error
          showAlert({
            type: 'error',
            message: 'Server error. Please try again later.',
            duration: 6000
          });
          setError("Server error. Please try again later.");
        } else {
          // Other errors
          const data = await res.json();
          showAlert({
            type: 'error',
            message: data.message || 'An unexpected error occurred.',
            duration: 6000
          });
          setError(data.message || "An unexpected error occurred");
        }
      } catch {
        // Network error
        showAlert({
          type: 'error',
          message: 'Network error. Please check your connection and try again.',
          duration: 6000
        });
        setError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
      return;
    }
    
    // On step 4, when 'Complete' is pressed, close the modal
    if (step === 4 && nextStep === 5) {
      if (onClose) onClose();
      return;
    }
    
    setStep(nextStep);
  };

  // Custom nextButtonProps for validation
  const nextButtonProps = {
    disabled: !validateStep(step),
  };

  // Mark fields as touched on blur
  const handleBlur = (field: string) => setTouched(t => ({ ...t, [field]: true }));

  return (
    <>
      <style>{datePickerPopoverStyle}</style>
      
      {/* Countdown Timer */}
      {submitted && step === 4 && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
            Closing in {countdown}s
          </div>
        </div>
      )}
      
      <div className="w-full text-center mb-4">
        <h2 className="text-2xl font-bold text-white">Book a Call</h2>
      </div>
      
      <Stepper
        initialStep={1}
        onStepChange={handleStepChange}
        onFinalStepCompleted={() => setSubmitted(true)}
        backButtonText="Previous"
        nextButtonText="Next"
        nextButtonProps={nextButtonProps}
      >
        {/* Step 1: Name & Clinic Name */}
        <Step>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Full Name</label>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                onBlur={() => handleBlur("name")}
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-accent-blue outline-none"
                placeholder="Your Name"
                autoFocus
              />
              {getFieldError("name") && (
                <p className="text-red-400 text-xs mt-1">{getFieldError("name")}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Clinic Name</label>
              <input
                value={clinic}
                onChange={e => setClinic(e.target.value)}
                onBlur={() => handleBlur("clinic")}
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-accent-blue outline-none"
                placeholder="Your Clinic Name"
              />
              {getFieldError("clinic") && (
                <p className="text-red-400 text-xs mt-1">{getFieldError("clinic")}</p>
              )}
            </div>
          </div>
        </Step>
        {/* Step 2: Email */}
        <Step>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email</label>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={() => handleBlur("email")}
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-accent-blue outline-none"
                placeholder="you@email.com"
                type="email"
              />
              {getFieldError("email") && (
                <p className="text-red-400 text-xs mt-1">{getFieldError("email")}</p>
              )}
            </div>
          </div>
        </Step>
        {/* Step 3: Preferred Date & Time */}
        <Step>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Preferred Date</label>
              <DatePicker
                value={preferredDate}
                onChange={setPreferredDate}
                onBlur={() => handleBlur("preferredDate")}
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white focus:ring-2 focus:ring-accent-blue outline-none"
              />
              {getFieldError("preferredDate") && (
                <p className="text-red-400 text-xs mt-1">{getFieldError("preferredDate")}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Preferred Time</label>
              <select
                value={preferredTime}
                onChange={e => setPreferredTime(e.target.value)}
                onBlur={() => handleBlur("preferredTime")}
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white focus:ring-2 focus:ring-accent-blue outline-none"
              >
                <option value="">Select a time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
              {getFieldError("preferredTime") && (
                <p className="text-red-400 text-xs mt-1">{getFieldError("preferredTime")}</p>
              )}
            </div>
            {error && (
              <div className="text-center text-red-400 mt-4">{error}</div>
            )}
          </div>
        </Step>
        {/* Step 4: Loading State or Confirmation */}
        <Step>
          <div className="flex flex-col items-center justify-center min-h-[200px] text-center space-y-4">
            {loading ? (
              <>
                <div className="relative">
                  {/* Brand-colored spinner */}
                  <div className="w-16 h-16 border-4 border-accent-blue/20 rounded-full">
                    <div className="w-16 h-16 border-4 border-accent-blue border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  {/* Additional accent colors */}
                  <div className="absolute inset-0 w-16 h-16 border-4 border-accent-green/30 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-16 h-16 border-4 border-accent-orange/20 rounded-full animate-ping"></div>
                </div>
                <div className="text-xl font-medium text-white/80">Setting up your booking...</div>
                <div className="text-sm text-white/60">Please wait while we process your request</div>
              </>
            ) : submitted ? (
              <>
                <div className="text-4xl">🎉</div>
                <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                <p className="text-body text-muted-foreground">
                  Your booking is confirmed.<br />
                  <span className="font-semibold">{name}</span> from <span className="font-semibold">{clinic}</span><br />
                  <span className="font-semibold">{email}</span><br />
                  <span className="font-semibold">{getDateString(preferredDate)}</span> at <span className="font-semibold">{preferredTime}</span>
                </p>
                <div className="mt-4 text-accent-blue">We look forward to meeting you!</div>
              </>
            ) : (
              <>
                <div className="text-4xl">⚠️</div>
                <h3 className="text-2xl font-bold text-white">Something went wrong</h3>
                <p className="text-body text-red-400">Please try again or contact support.</p>
              </>
            )}
          </div>
        </Step>
      </Stepper>
    </>
  );
}