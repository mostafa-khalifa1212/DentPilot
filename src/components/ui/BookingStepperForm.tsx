"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar } from '@heroui/calendar';
import { CalendarDate, today, getLocalTimeZone as getLTZ } from '@internationalized/date';
import Stepper, { Step } from './Stepper';
import { createPortal } from 'react-dom';

const step1Schema = z.object({
  name: z.string().min(1, 'Name is required'),
  clinicName: z.string().min(1, 'Clinic name is required'),
});

const step2Schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

const step3Schema = z.object({
  preferredTime: z.string().min(1, 'Please select a preferred time'),
  selectedDate: z.string().min(1, 'Please select a date'),
});

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

type Step1Fields = z.infer<typeof step1Schema>;
type Step2Fields = z.infer<typeof step2Schema>;
type Step3Fields = z.infer<typeof step3Schema>;

type BookingFormData = Step1Fields & Step2Fields & Step3Fields;

// Helper to get the local timezone or fallback
function getLocalTimeZoneSafe() {
  try {
    return typeof getLTZ === 'function' ? getLTZ() : 'Etc/UTC';
  } catch {
    return 'Etc/UTC';
  }
}

// Helper to safely parse a YYYY-MM-DD string to CalendarDate
function parseCalendarDate(str: string): CalendarDate | null {
  if (!str) return null;
  const parts = str.split('-').map(Number);
  if (parts.length === 3 && parts.every(n => !isNaN(n))) {
    return new CalendarDate(parts[0], parts[1], parts[2]);
  }
  return null;
}

export default function BookingStepperForm({ onClose }: { onClose?: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<BookingFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [selectedDate, setSelectedDate] = useState<CalendarDate | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const step1Form = useForm<Step1Fields>({
    resolver: zodResolver(step1Schema),
    defaultValues: { name: '', clinicName: '' },
  });
  const step2Form = useForm<Step2Fields>({
    resolver: zodResolver(step2Schema),
    defaultValues: { email: '' },
  });
  const step3Form = useForm<Step3Fields>({
    resolver: zodResolver(step3Schema),
    defaultValues: { preferredTime: '', selectedDate: '' },
  });

  const handleDateSelect = (date: CalendarDate) => {
    setSelectedDate(date);
    step3Form.setValue('selectedDate', date.toString());
  };

  const formatDate = (date: CalendarDate) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }).format(date.toDate(getLocalTimeZoneSafe()));
  };

  // Stepper navigation logic
  const handleStepChange = (step: number) => setCurrentStep(step);
  const handleFinalStepCompleted = () => { if (onClose) onClose(); };

  // Custom next handler for validation and async actions
  const handleNext = async (step: number) => {
    if (step === 1) {
      const isValid = await step1Form.trigger();
      if (isValid) {
        setFormData(prev => ({ ...prev, ...step1Form.getValues() }));
        return true;
      }
      return false;
    }
    if (step === 2) {
      const isValid = await step2Form.trigger();
      if (isValid) {
        setFormData(prev => ({ ...prev, ...step2Form.getValues() }));
        return true;
      }
      return false;
    }
    if (step === 3) {
      const isValid = await step3Form.trigger();
      if (isValid) {
        setIsSubmitting(true);
        setSubmitStatus(null);
        const step3Data = step3Form.getValues();
        const completeData: BookingFormData = {
          ...(formData as BookingFormData),
          ...step3Data,
        };
        try {
          const res = await fetch("https://dentpilot.dev/.netlify/functions/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: completeData.name,
              clinicName: completeData.clinicName,
              preferredDate: completeData.selectedDate,
              preferredTime: completeData.preferredTime,
              email: completeData.email,
            }),
          });
          const body = await res.text();
          if (res.ok) {
            setSubmitStatus('success');
            setFormData(completeData);
            return true;
          } else if (res.status === 409) {
            setSubmitStatus('error');
            return false;
          } else if ([400, 405, 500].includes(res.status)) {
            setSubmitStatus('error');
            return false;
          } else {
            setSubmitStatus('error');
            return false;
          }
        } catch (err) {
          setSubmitStatus('error');
          return false;
        } finally {
          setIsSubmitting(false);
        }
      }
      return false;
    }
    return true;
  };

  return createPortal(
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm" onClick={onClose}>
        <div className="relative w-full max-w-lg" onClick={e => e.stopPropagation()}>
          {/* Close button */}
          <button
            type="button"
            className="absolute top-4 right-4 z-10 text-white bg-gray-900/40 rounded-full p-2 hover:bg-gray-900/70 focus:outline-none"
            onClick={onClose}
            aria-label="Close booking form"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Stepper
            initialStep={1}
            onStepChange={handleStepChange}
            onFinalStepCompleted={handleFinalStepCompleted}
            backButtonText="Previous"
            nextButtonText="Next"
            validateStep={handleNext}
            title="Book a Call"
          >
            {/* Step 1: Name and Clinic */}
            <Step>
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Let's get to know you</h3>
                  <p className="text-gray-300">Tell us about yourself and your clinic</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
                  <input
                    {...step1Form.register('name')}
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1e90ff] focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                  {step1Form.formState.errors.name && (
                    <p className="text-red-400 text-sm mt-1">{step1Form.formState.errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Clinic Name *</label>
                  <input
                    {...step1Form.register('clinicName')}
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1e90ff] focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter your clinic name"
                  />
                  {step1Form.formState.errors.clinicName && (
                    <p className="text-red-400 text-sm mt-1">{step1Form.formState.errors.clinicName.message}</p>
                  )}
                </div>
              </div>
            </Step>
            {/* Step 2: Email */}
            <Step>
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
                  <p className="text-gray-300">How can we reach you?</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                  <input
                    {...step2Form.register('email')}
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1e90ff] focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter your email address"
                  />
                  {step2Form.formState.errors.email && (
                    <p className="text-red-400 text-sm mt-1">{step2Form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>
            </Step>
            {/* Step 3: Time and Calendar */}
            <Step>
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Schedule Your Call</h3>
                  <p className="text-gray-300">When would you like to talk?</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Preferred Time *</label>
                  <select
                    {...step3Form.register('preferredTime')}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1e90ff] focus:border-transparent text-white"
                  >
                    <option value="" className="text-gray-400">Select your preferred time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="text-white">
                        {slot}
                      </option>
                    ))}
                  </select>
                  {step3Form.formState.errors.preferredTime && (
                    <p className="text-red-400 text-sm mt-1">{step3Form.formState.errors.preferredTime.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Preferred Date *</label>
                  <input {...step3Form.register('selectedDate')} type="hidden" />
                  <button
                    type="button"
                    onClick={() => setShowCalendar(true)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#1e90ff] focus:border-transparent text-left text-white"
                  >
                    {selectedDate ? formatDate(selectedDate) : 'Select a date'}
                  </button>
                  {step3Form.formState.errors.selectedDate && (
                    <p className="text-red-400 text-sm mt-1">{step3Form.formState.errors.selectedDate.message}</p>
                  )}
                </div>
                {isSubmitting && (
                  <div className="text-center text-blue-400">Submitting your booking request...</div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-center text-red-400">Failed to submit booking. Please try again.</div>
                )}
              </div>
            </Step>
            {/* Step 4: Thank You */}
            <Step>
              <div className="space-y-6 text-center">
                {isSubmitting ? (
                  <div className="flex flex-col items-center justify-center min-h-[200px] text-center space-y-4">
                    <div className="relative">
                      <div className="w-16 h-16 border-4 border-accent-blue/20 rounded-full">
                        <div className="w-16 h-16 border-4 border-accent-blue border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      <div className="absolute inset-0 w-16 h-16 border-4 border-accent-green/30 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-16 h-16 border-4 border-accent-orange/20 rounded-full animate-ping"></div>
                    </div>
                    <div className="text-xl font-medium text-white/80">Setting up your booking...</div>
                    <div className="text-sm text-white/60">Please wait while we process your request</div>
                  </div>
                ) : submitStatus === 'success' ? (
                  <>
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-300 mb-6">
                      Your booking request has been submitted successfully. We'll be in touch soon to confirm your call.
                    </p>
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <p className="text-green-300 text-sm">
                        ✅ Booking confirmed for {
                          formData.selectedDate && typeof formData.selectedDate === 'string' && parseCalendarDate(formData.selectedDate)
                            ? formatDate(parseCalendarDate(formData.selectedDate)!)
                            : 'N/A'
                        } at {formData.preferredTime || 'N/A'}
                      </p>
                    </div>
                  </>
                ) : submitStatus === 'error' ? (
                  <div className="text-center text-red-400">Failed to submit booking. Please try again.</div>
                ) : null}
              </div>
            </Step>
          </Stepper>
        </div>
      </div>
      {showCalendar && createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 shadow-xl">
            <Calendar
              aria-label="Select date"
              value={selectedDate}
              onChange={(date: CalendarDate) => {
                handleDateSelect(date);
                setShowCalendar(false);
              }}
              minValue={today(getLocalTimeZoneSafe())}
              classNames={{
                base: "bg-gray-800",
                headerWrapper: "bg-gray-800",
                title: "text-white",
                gridHeader: "bg-gray-800",
                gridHeaderRow: "bg-gray-800",
                gridHeaderCell: "text-gray-300",
                gridBody: "bg-gray-800",
                gridBodyRow: "bg-gray-800",
                cell: "text-white hover:bg-gray-700",
                cellButton: [
                  "data-[selected=true]:bg-[#1e90ff]",
                  "data-[selected=true]:text-white",
                  "data-[hover=true]:bg-gray-700"
                ],
                prevButton: "text-white hover:bg-gray-700",
                nextButton: "text-white hover:bg-gray-700"
              }}
            />
          </div>
        </div>,
        document.body
      )}
    </>,
    document.body
  );
}