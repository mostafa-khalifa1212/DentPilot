"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui"
import { ArrowRight, Phone, Clock, Users, Zap, Shield, CheckCircle } from "lucide-react"
import { useBooking } from "@/contexts/BookingContext"

export default function AIReceptionistPage() {
  const { setShowBooking } = useBooking();

  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a call again. Our AI receptionist works around the clock to handle patient inquiries."
    },
    {
      icon: Users,
      title: "Personalized Responses",
      description: "Tailored to your clinic's specific procedures, policies, and patient information."
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description: "Book appointments instantly while maintaining the personal touch your patients expect."
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Bank-grade security with end-to-end encryption and audit trails for patient data."
    }
  ];

  const benefits = [
    "Reduce missed calls by 95%",
    "Increase booking conversion by 40%",
    "Save 20+ hours per week on phone management",
    "Improve patient satisfaction scores",
    "Handle multiple calls simultaneously",
    "Provide consistent, professional service"
  ];

  const process = [
    {
      step: "1",
      title: "Discovery Call",
      description: "We analyze your current phone system and understand your clinic's unique needs."
    },
    {
      step: "2",
      title: "Knowledge Base Creation",
      description: "We build a comprehensive database with your procedures, policies, and patient information."
    },
    {
      step: "3",
      title: "System Integration",
      description: "We seamlessly integrate with your existing phone system and booking platform."
    },
    {
      step: "4",
      title: "Testing & Launch",
      description: "We thoroughly test the system and launch with full training and support."
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
              AI Voice <span className="text-gradient">Receptionist</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Never miss a call again. Our AI receptionist answers phones 24/7, books appointments, 
              and provides personalized patient support—all while maintaining the professional 
              touch your patients expect.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="xl" glow className="animate-pulse-glow" onClick={() => setShowBooking(true)}>
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="#demo">Watch Demo</Link>
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
              Why Choose Our <span className="text-gradient">AI Receptionist</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the future of patient communication with our advanced AI technology 
              designed specifically for dental practices.
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
                Transform Your <span className="text-gradient">Phone Operations</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our AI receptionist doesn&apos;t just answer calls—it transforms your entire 
                patient communication strategy, leading to measurable improvements in 
                efficiency and patient satisfaction.
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
                  <Phone className="w-16 h-16 text-accent-blue mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Live Demo</h3>
                  <p className="text-muted-foreground mb-6">
                    See our AI receptionist in action with a personalized demo of your clinic&apos;s workflow.
                  </p>
                  <Button size="lg" variant="outline" className="w-full">
                    Schedule Demo Call
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="text-gradient">4-Step Setup</span> Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We make it simple to get started with your AI receptionist. Our proven process 
              ensures a smooth transition and maximum results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
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
              Ready to Never Miss a Call Again?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of dental practices that have transformed their phone operations 
              with our AI receptionist. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" glow className="animate-pulse-glow" onClick={() => setShowBooking(true)}>
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