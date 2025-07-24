"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui"
import { ArrowRight, UserPlus, FileText, Shield, Zap, CheckCircle, Clock } from "lucide-react"

export default function PatientOnboardingPage() {
  const features = [
    {
      icon: FileText,
      title: "Digital Forms",
      description: "Convert paper forms to digital, auto-fill patient information, and collect signatures electronically."
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Bank-grade security with end-to-end encryption and audit trails for all patient data."
    },
    {
      icon: Clock,
      title: "Time Saving",
      description: "Reduce patient check-in time by 80% and eliminate manual data entry for your staff."
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Real-time form validation, instant insurance verification, and immediate appointment confirmation."
    }
  ];

  const benefits = [
    "Reduce check-in time by 80%",
    "Eliminate manual data entry errors",
    "Improve patient satisfaction scores",
    "Streamline insurance verification",
    "Reduce staff workload significantly",
    "Ensure HIPAA compliance automatically"
  ];

  const workflow = [
    {
      step: "1",
      title: "Pre-Visit Preparation",
      description: "Patients receive automated emails/SMS/WhatsApp messages with digital forms after the booking call via the AI receptionist, insurance upload instructions, and pre-visit guidelines."
    },
    {
      step: "2",
      title: "Digital Form Completion",
      description: "Patients fill out medical history, insurance information, and consent forms from any device before arrival."
    },
    {
      step: "3",
      title: "Automated Verification",
      description: "System automatically verifies insurance, validates information, and flags any missing or incorrect data."
    },
    {
      step: "4",
      title: "Seamless Check-in",
      description: "Patients arrive with everything pre-processed, reducing wait times and improving the overall experience."
    }
  ];

  const forms = [
    {
      title: "Medical History Forms",
      description: "Comprehensive digital medical history with auto-save and validation.",
      features: ["Auto-save progress", "Conditional questions", "Medical history import"]
    },
    {
      title: "Insurance Information",
      description: "Collect insurance details digitally for faster check-in and reduced paperwork.",
      features: ["Easy insurance info entry", "Secure document upload", "Staff review workflow"]
    },
    {
      title: "Consent Forms",
      description: "Digital consent forms with electronic signatures and legal compliance.",
      features: ["Electronic signatures", "Legal compliance", "Audit trails"]
    },
    {
      title: "Pre-Visit Instructions",
      description: "Personalized instructions based on appointment type and patient history.",
      features: ["Personalized content", "Multi-language support", "Video instructions"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-background to-slate-950" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
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
              🔥 Top Seller
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Patient <span className="text-gradient">Onboarding</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Transform your patient check-in process with intelligent automation. 
              Digital forms, instant verification, and seamless onboarding that 
              saves time for both patients and staff while ensuring compliance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="xl" glow className="animate-pulse-glow" onClick={() => window.location.href = '/booking'}>
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="#workflow">View Workflow</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Streamlined <span className="text-gradient">Patient Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our patient onboarding system eliminates paperwork, reduces wait times, 
              and creates a professional, modern experience that patients love.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-linear-to-r from-accent-blue to-accent-green p-0.5 mx-auto mb-6">
                    <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent-blue" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20" id="workflow">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Complete <span className="text-gradient">Onboarding Workflow</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From first contact to check-in, our automated workflow ensures 
              every patient is fully prepared before they arrive at your clinic.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-6 border border-white/10 h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-blue to-accent-green flex items-center justify-center text-white font-bold text-lg mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Digital <span className="text-gradient">Forms & Documents</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Replace paper forms with intelligent digital solutions that 
              save time, reduce errors, and improve patient satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {forms.map((form, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-semibold mb-4">{form.title}</h3>
                <p className="text-muted-foreground mb-6">{form.description}</p>
                <div className="space-y-3">
                  {form.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Measurable <span className="text-gradient">Benefits</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our patient onboarding automation delivers concrete results that 
                you can measure and track. See the impact on your clinic&apos;s efficiency 
                and patient satisfaction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 border border-white/10">
                <div className="text-center">
                  <UserPlus className="w-16 h-16 text-accent-blue mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Success Story</h3>
                  <p className="text-muted-foreground mb-6">
                    &quot;Our patient check-in time went from 15 minutes to just 3 minutes. 
                    Patients love the digital experience, and our staff can focus on 
                    providing care instead of paperwork.&quot;
                  </p>
                  <div className="text-sm text-muted-foreground">
                    — Dr. Michael Chen, Bright Smile Dental
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Patient Check-ins?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of dental practices that have revolutionized their 
              patient onboarding with our intelligent automation system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" glow className="animate-pulse-glow" onClick={() => window.location.href = '/booking'}>
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 