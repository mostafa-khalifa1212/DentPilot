"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Alert {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}

interface BookingContextType {
  showBooking: boolean;
  setShowBooking: (show: boolean) => void;
  showAlert: (alert: Omit<Alert, 'id'>) => void;
  alerts: Alert[];
  removeAlert: (id: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [showBooking, setShowBooking] = useState(false);
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const showAlert = (alert: Omit<Alert, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newAlert = { ...alert, id };
    
    setAlerts(prev => [...prev, newAlert]);
    
    // Auto-remove alert after duration (default 5 seconds)
    setTimeout(() => {
      removeAlert(id);
    }, alert.duration || 5000);
  };

  const removeAlert = (id: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  return (
    <BookingContext.Provider value={{
      showBooking,
      setShowBooking,
      showAlert,
      alerts,
      removeAlert,
    }}>
      {children}
      
      {/* Alert Container */}
      <div className="fixed bottom-4 right-4 z-[10000] space-y-2">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`
              flex items-center p-4 rounded-lg shadow-lg backdrop-blur-sm border
              transform transition-all duration-300 ease-out
              ${alert.type === 'success' 
                ? 'bg-green-500/20 border-green-500/30 text-green-100' 
                : alert.type === 'error'
                ? 'bg-red-500/20 border-red-500/30 text-red-100'
                : alert.type === 'warning'
                ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-100'
                : 'bg-blue-500/20 border-blue-500/30 text-blue-100'
              }
            `}
          >
            <div className="flex items-center space-x-3">
              {alert.type === 'success' && (
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
              {alert.type === 'error' && (
                <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
              {alert.type === 'warning' && (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              )}
              {alert.type === 'info' && (
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              )}
              <span className="text-sm font-medium">{alert.message}</span>
            </div>
            <button
              onClick={() => removeAlert(alert.id)}
              className="ml-4 text-gray-300 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
} 