"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui"
import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"


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
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-background to-slate-950" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
            className="text-center lg:text-left"
          >
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
              className="text-3xl sm:text-5xl md:text-6xl lg:text-hero font-bold mb-6 leading-tight"
            >
              AI Systems built By Dentists,{" "}
              <span className="text-gradient">For Dentists</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
              className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              From missed calls to lost leads, traditional front desk systems are broken.
We build AI-powered systems that answer questions, book appointments, follow up with leads, and keep your clinic full, <span className="text-gradient">without you lifting a finger</span>.


            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
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
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" glow className="animate-pulse-glow" asChild>
                <Link href="#contact">
                  Start Your Automation Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#case-studies">View Success Stories</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.6, 0.01, 0.05, 0.9] }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10"
            >
              {/* Dashboard Mockup */}
              <div className="glass rounded-2xl p-6 border border-white/10 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-gradient-to-r from-accent-blue to-accent-green rounded opacity-80"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-16 bg-slate-800 rounded"></div>
                    <div className="h-16 bg-slate-800 rounded"></div>
                    <div className="h-16 bg-slate-800 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-800 rounded w-1/2"></div>
                    <div className="h-4 bg-slate-800 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [-20, 20, -20],
                x: [-10, 10, -10]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-accent-blue/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ 
                y: [20, -20, 20],
                x: [10, -10, 10]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent-green/20 rounded-full blur-xl"
            />
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