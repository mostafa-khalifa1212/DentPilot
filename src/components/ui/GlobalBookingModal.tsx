"use client";

import { createPortal } from "react-dom";
import BookingStepperForm from "./BookingStepperForm";
import { useBooking } from "@/contexts/BookingContext";

export function GlobalBookingModal() {
  const { showBooking, setShowBooking } = useBooking();

  if (!showBooking || typeof window === 'undefined') {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
      <div className="absolute inset-0 cursor-pointer" onClick={() => setShowBooking(false)} />
      <div className="relative z-10 max-w-lg w-full mx-auto flex flex-col items-center justify-center">
        <BookingStepperForm onClose={() => setShowBooking(false)} />
        <button
          className="absolute top-2 right-2 text-white text-2xl bg-black/40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
          onClick={() => setShowBooking(false)}
          aria-label="Close booking form"
        >
          &times;
        </button>
      </div>
    </div>,
    document.body
  );
} 