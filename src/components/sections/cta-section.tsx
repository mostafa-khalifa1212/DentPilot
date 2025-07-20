"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui"
import { ArrowRight, Sparkles } from "lucide-react"
import { useBooking } from "@/contexts/BookingContext"

interface CTASectionProps {
  title?: string
  description?: string
  primaryText?: string
  primaryHref?: string
  secondaryText?: string
  secondaryHref?: string
  variant?: "default" | "compact"
  showSparkles?: boolean
}

export function CTASection({
  title = "Ready to Transform Your Dental Practice?",
        description = "Join thousands of clinics already automating their workflows with Dent Pilot. Start your automation journey today.",
  primaryText = "Start Free Trial",
  primaryHref = "#contact",
  secondaryText = "Schedule Demo",

  variant = "default",
  showSparkles = true,
}: CTASectionProps) {
  const { setShowBooking } = useBooking();

  return (
    <section className={variant === "compact" ? "py-16" : "section-padding"}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-accent-blue via-accent-blue/90 to-accent-green p-1"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-linear-to-br from-accent-blue/20 via-transparent to-accent-green/20" />
          {showSparkles && (
            <>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-white/10 rounded-full blur-3xl"
              />
            </>
          )}

          {/* Content Container */}
          <div className="relative bg-slate-950/95 backdrop-blur-sm rounded-3xl border border-white/10">
            <div className={variant === "compact" ? "p-8 md:p-12" : "p-12 md:p-16"}>
              <div className="text-center max-w-4xl mx-auto">
                {/* Icon */}
                {showSparkles && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-r from-accent-blue to-accent-green mb-6"
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </motion.div>
                )}

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className={variant === "compact" ? "text-h2 font-bold mb-4" : "text-h1 font-bold mb-6"}
                >
                  {title}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className={`text-muted-foreground mb-8 ${
                    variant === "compact" ? "text-base max-w-2xl mx-auto" : "text-body max-w-3xl mx-auto"
                  }`}
                >
                  {description}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button 
                    size={variant === "compact" ? "lg" : "xl"} 
                    glow 
                    className="animate-pulse-glow" 
                    asChild
                  >
                    <Link href={primaryHref}>
                      {primaryText}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  
                  {secondaryText && (
                    <Button 
                      size={variant === "compact" ? "lg" : "xl"} 
                      variant="outline" 
                      onClick={() => setShowBooking(true)}
                    >
                      {secondaryText}
                    </Button>
                  )}
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                    <span>No setup fees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                    <span>7-day free trial</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                    <span>Cancel anytime</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 