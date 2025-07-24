'use client'
import { useState } from 'react';
import { CheckCircle, TrendingUp, Rocket, Star } from 'lucide-react';
import BookingStepperForm from '../ui/BookingStepperForm';

const tiers = [
  {
    name: 'Smart Starter',
    price: '$999',
    priceNote: 'Starting at',
    subtitle: 'Automate one workflow and boost productivity instantly.',
    description: 'Ideal for small practices or first-time automation users.',
    features: [
      'Choice of one AI automation (e.g. reminders, reviews, reactivations)',
      'Daily schedule digest for staff',
      'Patient pre-visit instructions',
      'Google Reviews automation',
    ],
    badge: 'Most Popular for Solo Clinics',
    icon: Star,
    setupFee: '$1500',
    cta: 'Book a Demo',
  },
  {
    name: 'Growth Mode',
    price: '$1799',
    oldPrice: '$1999',
    priceNote: 'Starting at',
    subtitle: 'Expand your efficiency with two powerful automations.',
    description: 'Best for growing clinics aiming to scale with minimal overhead.',
    features: [
      'Any two AI automations (voice receptionist, reminders, reviews, reactivations)',
      'All Tier 1 features',
      'Patient lead nurturing campaigns',
      'Priority support',
    ],
    badge: 'Best Value for Growth Clinics',
    icon: TrendingUp,
    setupFee: '$1500',
    cta: 'Book a Demo',
  },
  {
    name: 'Full Autopilot',
    price: '$2499',
    oldPrice: '$2999',
    priceNote: 'Starting at',
    subtitle: 'Your fully automated digital front desk.',
    description: 'For high-traffic clinics ready to eliminate manual admin.',
    features: [
      'All DentPilot automations (AI voice receptionist, reminders, reviews, reactivations, lead nurturing)',
      'Full chatbot setup',
      'Custom onboarding & workflows',
      '24/7 smart voice call answering',
      'Staff training & weekly insights reports',
    ],
    badge: 'Ultimate Automation Suite',
    icon: Rocket,
    setupFee: '$1500',
    cta: 'Book a Demo',
  },
];

export function PricingSection() {
  const [showBooking, setShowBooking] = useState(false);
  return (
    <section id="pricing" className="py-20 bg-slate-950/60">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-white">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className="relative flex flex-col bg-slate-950 rounded-2xl shadow-xl border border-white/10 p-8 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl group"
                style={{ minHeight: 520 }}
              >
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-block px-4 py-1 rounded-full bg-accent-blue text-white text-xs font-semibold shadow-glow border border-accent-blue/30">
                    {tier.badge}
                  </span>
                </div>
                {/* Icon */}
                <div className="flex items-center justify-center mb-6">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-cyan shadow-glow">
                    <Icon className="w-8 h-8 text-white" />
                  </span>
                </div>
                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white mb-2 text-center">{tier.name}</h3>
                <div className="text-center text-accent-cyan font-semibold mb-2">{tier.subtitle}</div>
                <div className="text-center text-gray-400 mb-4 text-sm">{tier.description}</div>
                {/* Price */}
                <div className="flex items-center justify-center mb-2">
                  <span className="text-gray-300 text-xs mr-2">{tier.priceNote}</span>
                  <span className="text-3xl font-extrabold text-accent-blue">{tier.price}</span>
                  {tier.oldPrice && (
                    <span className="ml-3 text-base font-semibold text-gray-500 line-through">{tier.oldPrice}</span>
                  )}
                  <span className="ml-2 text-xs text-gray-400">/month</span>
                </div>
                <div className="text-center text-xs text-gray-400 mb-4">One-time setup fee: <span className="font-semibold text-white">$1500</span></div>
                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex  gap-2 text-gray-200 text-sm">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 min-w-[1rem] min-h-[1rem]" style={{ color: '#32d74b' }} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* CTA */}
                <button
                  className="mt-auto w-full py-3 rounded-xl bg-accent-blue text-white font-semibold shadow-glow hover:bg-accent-cyan transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2"
                  onClick={() => setShowBooking(true)}
                >
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>
        {/* Footer text */}
        <div className="mt-12 text-center text-gray-300 text-base">
          Need a custom plan? Let&apos;s build one together.{' '}
          <a href="mailto:support@dentpilot.dev" className="text-accent-cyan underline hover:text-accent-blue">Contact us</a>{' '}or{' '}
          <button
            className="text-accent-cyan underline hover:text-accent-blue focus:outline-none"
            onClick={() => setShowBooking(true)}
            type="button"
          >
            book a call
          </button>{' '}
          and we&apos;ll help.
        </div>
        {showBooking && <BookingStepperForm onClose={() => setShowBooking(false)} />}
      </div>
    </section>
  );
} 