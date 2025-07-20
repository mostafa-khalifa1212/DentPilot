"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui"
import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react"



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
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-background to-slate-950" />
      
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
              {/* Single Dashboard Mockup */}
              <div className="glass rounded-2xl p-4 border border-white/10 shadow-2xl w-[700px] h-85">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1"></div>
                  <div className="text-xs text-muted-foreground">DentPilot Dashboard</div>
                </div>
                
                {/* Dashboard Content - Two Columns */}
                <div className="flex space-x-4 h-full">
                  {/* Left Side - Metrics */}
                  <div className="flex-1 space-y-3">
                    {/* Header Stats */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gradient-to-r from-accent-blue/20 to-accent-green/20 rounded-lg p-2 border border-accent-blue/30">
                        <div className="text-xs text-accent-blue mb-1">Revenue</div>
                        <div className="text-sm font-bold text-white">$12,450</div>
                        <div className="text-xs text-green-400">+23% vs last month</div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-2 border border-purple-500/30">
                        <div className="text-xs text-purple-400 mb-1">Bookings</div>
                        <div className="text-sm font-bold text-white">47</div>
                        <div className="text-xs text-green-400">+8 today</div>
                      </div>
                      <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-2 border border-orange-500/30">
                        <div className="text-xs text-orange-400 mb-1">Patients</div>
                        <div className="text-sm font-bold text-white">1,247</div>
                        <div className="text-xs text-green-400">+12 this week</div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-lg p-2 border border-indigo-500/30">
                        <div className="text-xs text-indigo-400 mb-1">AI Calls</div>
                        <div className="text-sm font-bold text-white">89</div>
                        <div className="text-xs text-green-400">98% accuracy</div>
                      </div>
                    </div>
                    
                    {/* Recent Activity */}
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground mb-1">Recent Activity</div>
                      <div className="flex items-center space-x-2 text-xs">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-muted-foreground">New booking: Sarah M. - 2:30 PM</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-muted-foreground">AI call completed: 98% accuracy</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-muted-foreground">Follow-up sent: 15 patients</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Chart */}
                  <div className="flex-1 flex flex-col">
                    {/* Chart Title */}
                    <div className="text-xs text-muted-foreground mb-2">Weekly Performance</div>
                    
                    {/* Chart Area */}
                    <div className="flex-1 mb-6 pt-2 bg-gradient-to-br from-slate-800/30 to-slate-700/30 rounded-lg p-3 border border-white/10 relative h-80">
                      {/* Y-axis label */}
                      <div className="absolute top-1/2 pb-20 transform -translate-y-1/2 -rotate-90 text-xs text-muted-foreground whitespace-nowrap">
                        Patient Bookings
                      </div>
                      
                      {/* Chart bars */}
                      <div className="flex items-end justify-between h-full ml-8 pb-4 space-x-2">
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-5 bg-accent-blue rounded-t-sm" style={{height: '60%', minHeight: '90px'}}></div>
                          <div className="text-xs text-muted-foreground">Mon</div>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-5 bg-accent-green rounded-t-sm" style={{height: '80%', minHeight: '30px'}}></div>
                          <div className="text-xs text-muted-foreground">Tue</div>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-5 bg-accent-blue rounded-t-sm" style={{height: '45%', minHeight: '60px'}}></div>
                          <div className="text-xs text-muted-foreground">Wed</div>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-5 bg-accent-green rounded-t-sm" style={{height: '90%', minHeight: '50px'}}></div>
                          <div className="text-xs text-muted-foreground">Thu</div>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-5 bg-accent-blue rounded-t-sm" style={{height: '70%', minHeight: '100px'}}></div>
                          <div className="text-xs text-muted-foreground">Fri</div>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-5 bg-accent-green rounded-t-sm" style={{height: '85%', minHeight: '90px'}}></div>
                          <div className="text-xs text-muted-foreground">Sat</div>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-5 bg-accent-blue rounded-t-sm" style={{height: '55%', minHeight: '60px'}}></div>
                          <div className="text-xs text-muted-foreground">Sun</div>
                        </div>
                      </div>
                      
                      {/* X-axis label - moved up a bit */}
                      <div className="text-center mb-2 ">
                        <div className="text-xs text-muted-foreground">Days</div>
                      </div>
                    </div>
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