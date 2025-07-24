"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui"
import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react"
import dynamic from "next/dynamic"
import { useState } from 'react';

const DarkVeil = dynamic(() => import("@/components/ui/dark-veil"), { ssr: false })
const BookingStepperForm = dynamic(() => import("../ui/BookingStepperForm"), { ssr: false })

const features = [
  {
    icon: Zap,
    text: "Instant Automation",
  },
  {
    icon: TrendingUp,
    text: "Proven ROI",
  },
  {
    icon: Shield,
    text: "Enterprise Secure",
  },
]

export function HeroSection() {
  const [showBooking, setShowBooking] = useState(false);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Veil Background */}
      <div className="absolute inset-0">
        <DarkVeil 
          hueShift={33}
          noiseIntensity={0.02}
          scanlineIntensity={0}
          speed={0.9}
          scanlineFrequency={0}
          warpAmount={0.1}
          resolutionScale={1}
        />
        {/* SVG Overlay for lightweight dark veil */}
        <div className="absolute inset-0 pointer-events-none z-10 w-screen min-w-[1000px]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="veil" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(20, 20, 20, 0.7)" />
                <stop offset="100%" stopColor="rgba(30, 30, 30, 0.26)" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#veil)" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10"> 
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass border border-accent-blue/20 text-sm font-medium text-accent-blue mb-6"
          >
            🦷 Built by Dental Professionals
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
            className=" text-5xl sm:text-4xl md:text-4xl lg:text-6xl font-bold mb-6 "
          >
            AI Systems Built By Dentists, {<br/>}
            <span className="text-gradient">For Dentists</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            From missed calls to lost leads, traditional front desk systems are broken.
            We build AI-powered systems that answer questions, book appointments, follow up with leads, and keep your clinic full, <span className="text-gradient">without you lifting a finger</span>.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="flex items-center space-x-2">
                  <Icon className="w-5 h-5 text-accent-green" />
                  <span className="text-sm font-medium text-foreground">
                    {feature.text}
                  </span>
                </div>
              )
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              glow 
              className="animate-pulse-glow" 
              onClick={() => setShowBooking(true)}
            >
              Start Your Automation Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            {showBooking && <BookingStepperForm onClose={() => setShowBooking(false)} />}
            <Button size="lg" variant="outline" asChild>
              <Link href="#case-studies">View Success Stories</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-accent-blue/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-accent-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 