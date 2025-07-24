"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui"
import { 
  UserPlus, 
  RefreshCw, 
  UserCheck,
  MessageSquare,
  Target,
  ArrowRight,
  PhoneCall
} from "lucide-react"

const features = [
  {
    icon: PhoneCall,
    title: "AI Receptionist",
    description: "Never miss a call again, booking appointments and answering patient phone calls on autopilot, using professional AI Voice assistants tailored to your clinic specifically.",
    isTopSeller: true,
    detailsLink: "/services/ai-receptionist",
  },
  {
    icon: RefreshCw,
    title: "Post-Visit Follow-up",
    description: "Treatment reminders, review collection, missed appointment reactivation, and patient retention automation.",
    isTopSeller: true,
    detailsLink: "/services/patient-followup",
  },
  {
    icon: UserPlus,
    title: "Patient Onboarding",
    description: "Pre-visit instructions, digital medical forms, ID & insurance uploads, and automated patient preparation.",
    isTopSeller: true,
    detailsLink: "/services/patient-onboarding",
  },
  {
    icon: MessageSquare,
    title: "Live Chat & Chatbot",
    description: "AI chatbot for FAQs, appointment booking, and 24/7 patient support automation.",
    isTopSeller: false,
    detailsLink: null,
  },
  {
    icon: Target,
    title: "Lead Generation & Nurturing",
    description: "Google Maps scraping, lead capture automation, nurturing sequences, and social media lead sync to fill your pipeline.",
    isTopSeller: false,
    detailsLink: null,
  },
  
  {
    icon: UserCheck,
    title: "Patient Reactivation",
    description: "Inactive patient campaigns, birthday/anniversary automations, and AI-generated win-back sequences.",
    isTopSeller: false,
    detailsLink: null,
  }
  
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
  },
}

export function FeatureGrid() {
  return (
    <section id="services" className="section-padding bg-slate-950/50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
                    {/* Top Seller Badge */}
                    {feature.isTopSeller && (
                      <div className="absolute top-4 right-4">
                        <div className="inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-xs font-medium text-white">
                          🔥 Top Seller
                        </div>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-xl bg-linear-to-r from-accent-blue to-accent-green p-0.5 mb-4">
                        <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                          <Icon className="w-7 h-7 text-accent-blue group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-h3 font-semibold mb-3 group-hover:text-accent-blue transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* More Details Button */}
                    {feature.detailsLink && (
                      <div className="mt-auto">
                        <Link 
                          href={feature.detailsLink}
                          className="inline-flex items-center text-sm font-medium text-accent-blue hover:text-accent-green transition-colors duration-300 group/link"
                        >
                          More details
                          <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    )}
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
            className="inline-flex items-center px-8 py-4 bg-linear-to-r from-accent-blue to-accent-green rounded-full text-white font-medium shadow-glow hover:shadow-2xl transition-all duration-300"
          >
            Explore Our Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 