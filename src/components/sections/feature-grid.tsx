"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui"
import { 
  Users, 
  Calendar, 
  UserPlus, 
  Stethoscope, 
  RefreshCw, 
  UserCheck,
  Bell,
  BarChart3,
  MessageSquare,
  Settings,
  Zap,
  Target
} from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Lead Generation & Nurturing",
    description: "Google Maps scraping, lead capture automation, nurturing sequences, and social media lead sync to fill your pipeline.",
  },
  {
    icon: Calendar,
    title: "AI Receptionist",
    description: "Never miss a call again, booking appointments and answering patient phone calls on autopilot, using professional AI Voice assistants tailored to your clinic specifically.",
  },
  {
    icon: UserPlus,
    title: "Patient Onboarding",
    description: "Pre-visit instructions, digital medical forms, ID & insurance uploads, and automated patient preparation.",
  },
  {
    icon: Stethoscope,
    title: "In-Treatment Experience",
    description: "QR-code form autofill, digital signatures, and seamless in-clinic workflow automation.",
  },
  {
    icon: RefreshCw,
    title: "Post-Visit Follow-up",
    description: "Treatment reminders, review collection, missed appointment reactivation, and patient retention automation.",
  },
  {
    icon: UserCheck,
    title: "Patient Reactivation",
    description: "Inactive patient campaigns, birthday/anniversary automations, and AI-generated win-back sequences.",
  },
  {
    icon: Bell,
    title: "Team Automation",
    description: "Daily schedule digests, Slack/WhatsApp alerts, automated invoicing, and internal workflow optimization.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Weekly KPI dashboards, lead source analytics, revenue tracking, and performance insights.",
  },
  {
    icon: MessageSquare,
    title: "Live Chat & Chatbot",
    description: "AI chatbot for FAQs, appointment booking, and 24/7 patient support automation.",
  },
  {
    icon: Settings,
    title: "Seamless Integrations",
    description: "Connect with Google Calendar, Notion, Sheets, Stripe, Gmail, Typeform, Calendly, Slack, and more.",
  },
  {
    icon: Zap,
    title: "HIPAA Compliant",
    description: "Bank-grade security with SOC 2 compliance, end-to-end encryption, and audit trails for patient data.",
  },
  {
    icon: Users,
    title: "Built by Dentists",
    description: "AI systems designed specifically for dental practices by dental professionals who understand your workflow.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.01, 0.05, 0.9],
    },
  },
}

export function FeatureGrid() {
  return (
    <section id="services" className="section-padding bg-[#020617]/50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-bold mb-6">
            Why Choose <span className="text-gradient">Dent Pilot</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            Experience the future of dental practice automation with our cutting-edge AI platform. 
            Transform your clinic operations and unlock unprecedented growth potential.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card 
                  variant="glass" 
                  hover 
                  className="h-full group cursor-default"
                >
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-accent-blue to-accent-green p-0.5 mb-4">
                        <div className="w-full h-full rounded-xl bg-[#020617] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                          <Icon className="w-7 h-7 text-accent-blue group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-h3 font-semibold mb-3 group-hover:text-accent-blue transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
          className="text-center mt-16"
        >
          <p className="text-body text-muted-foreground mb-6">
            Ready to transform your business with AI automation?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-green rounded-full text-white font-medium shadow-glow hover:shadow-2xl transition-all duration-300"
          >
            Explore Our Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 