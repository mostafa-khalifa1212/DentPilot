"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui"
import { ArrowRight, RefreshCw, Heart, Users, Zap, TrendingUp, CheckCircle } from "lucide-react"
import { useBooking } from "@/contexts/BookingContext"

export default function PatientFollowupPage() {
  const { setShowBooking } = useBooking();

  const features = [
    {
      icon: RefreshCw,
      title: "Automated Follow-ups",
      description: "Never lose a patient again with intelligent follow-up sequences that nurture relationships."
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Tailored communication based on treatment history, preferences, and patient journey stage."
    },
    {
      icon: Users,
      title: "Patient Retention",
      description: "Proven strategies to keep patients engaged and coming back for regular care."
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Increase patient lifetime value through strategic nurturing and rebooking automation."
    }
  ];

  const workflows = [
    {
      title: "Post-Treatment Follow-up",
      description: "Automated check-ins after procedures to ensure patient satisfaction and recovery.",
      benefits: ["Improve patient satisfaction", "Reduce complications", "Increase referrals"]
    },
    {
      title: "Appointment Reminders",
      description: "Smart reminders that reduce no-shows and keep patients on track with their care plan.",
      benefits: ["Reduce no-shows by 60%", "Improve attendance rates", "Save staff time"]
    },
    {
      title: "Reactivation Campaigns",
      description: "Win back inactive patients with personalized campaigns and special offers.",
      benefits: ["Re-engage inactive patients", "Increase rebooking rates", "Boost revenue"]
    },
    {
      title: "Review Collection",
      description: "Automated review requests that help build your online reputation and attract new patients.",
      benefits: ["Build online reputation", "Generate referrals", "Improve SEO"]
    }
  ];

  const benefits = [
    "Increase patient retention by 40%",
    "Reduce no-shows by 60%",
    "Improve patient satisfaction scores",
    "Generate more positive reviews",
    "Increase patient lifetime value",
    "Save 15+ hours per week on follow-ups"
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
              Patient <span className="text-gradient">Nurturing</span> Workflows
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Transform patient relationships with intelligent automation that nurtures, 
              engages, and retains your patients throughout their entire journey. 
              Build lasting relationships that drive growth.
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
                <Link href="#workflows">View Workflows</Link>
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
              Intelligent <span className="text-gradient">Patient Nurturing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our patient nurturing workflows are designed to build stronger relationships, 
              improve retention, and drive sustainable growth for your practice.
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

      {/* Workflows Section */}
      <section className="py-20" id="workflows">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Complete <span className="text-gradient">Patient Journey</span> Workflows
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From first contact to lifelong care, our workflows ensure every patient 
              receives personalized attention at every stage of their journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {workflows.map((workflow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-semibold mb-4">{workflow.title}</h3>
                <p className="text-muted-foreground mb-6">{workflow.description}</p>
                <div className="space-y-3">
                  {workflow.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Measurable <span className="text-gradient">Results</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our patient nurturing workflows deliver concrete results that you can 
                measure and track. See the impact on your practice's growth and patient satisfaction.
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
                  <RefreshCw className="w-16 h-16 text-accent-blue mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Success Story</h3>
                  <p className="text-muted-foreground mb-6">
                    "Our patient retention increased by 45% within 3 months of implementing 
                    DentPilot's nurturing workflows. The automated follow-ups have been a game-changer."
                  </p>
                  <div className="text-sm text-muted-foreground">
                    — Dr. Sarah Johnson, Smile Dental Clinic
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
              Ready to Transform Patient Relationships?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of dental practices that have revolutionized their patient 
              nurturing with our intelligent automation workflows.
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