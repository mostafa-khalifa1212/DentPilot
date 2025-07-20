"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui"

import { useBooking } from "@/contexts/BookingContext"
import { MessageSquare } from "lucide-react"

const faqs = [
  {
    question: "How quickly can I implement Dent Pilot in my clinic?",
    answer: "Most dental clinics see their first automated workflows running within 24-48 hours. Our pre-built templates and guided setup process make implementation incredibly fast. Complex integrations typically take 1-2 weeks, but you'll start seeing benefits immediately."
  },
  {
    question: "What kind of ROI can I expect from Dent Pilot?",
    answer: "Our clients typically see 200-400% ROI within the first 6 months. The exact ROI depends on your clinic size and processes, but common benefits include 60-80% reduction in manual tasks, 50% faster patient processing, and 90% fewer errors in automated workflows."
  },
  {
    question: "Is my patient data secure with Dent Pilot?",
    answer: "Absolutely. We use bank-grade encryption (AES-256), maintain SOC 2 Type II compliance, and offer private cloud deployments for enterprise clients. Your data never leaves your control, and we provide detailed audit trails for all automated actions."
  },
  {
    question: "Do I need technical expertise to use Dent Pilot?",
    answer: "No coding required! Our visual workflow builder is designed for dental staff. You can create complex automations using drag-and-drop interfaces. For advanced customizations, our technical team provides white-glove support and custom development."
  },
  
  {
    question: "What happens if an automation fails?",
    answer: "Our platform includes comprehensive error handling, automatic retries, and instant alerts. Failed automations are logged with detailed error messages, and our system can automatically route tasks to human review when needed. We maintain 99.9% uptime SLA."
  },
  {
    question: "How much does Dent Pilot cost?",
    answer: "Our pricing starts at $999/month for small clinics and scales based on your automation volume and feature needs. Enterprise plans include custom pricing with volume discounts. All plans include a 14-day free trial with full feature access."
  },
  {
    question: "Can Dent Pilot handle HIPAA and dental compliance?",
    answer: "Yes, we support HIPAA, GDPR, SOX, and other compliance frameworks. Our platform includes audit logging, data governance controls, and configurable approval workflows to meet your specific regulatory requirements."
  },
  {
    question: "What kind of support do you provide?",
    answer: "All plans include email support and comprehensive documentation. Paid plans get priority support with faster response times. Enterprise customers receive dedicated account management, phone support, and optional on-site training."
  },
  {
    question: "How do you measure automation performance?",
    answer: "Our analytics dashboard tracks key metrics like time saved, error rates, patient processing speed, cost reduction, and ROI. You'll get detailed reports showing exactly how automation is impacting your clinic, with real-time monitoring and custom alerts."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export function FaqAccordion() {
  const { setShowBooking } = useBooking();
  
  const openChat = () => {
    // Trigger chat widget to open
    const chatButton = document.querySelector('[data-chat-trigger]') as HTMLElement;
    if (chatButton) {
      chatButton.click();
    }
  };

  return (
    <section id="faq" className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-h1 font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              Get answers to the most common questions about AI automation and how 
              AutoPilotAI can transform your business operations.
            </p>
          </motion.div>

          {/* FAQ Grid */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <AccordionItem 
                      value={`item-${index}`}
                      className="glass border border-white/10 rounded-xl px-6 data-[state=open]:border-accent-blue/30 transition-colors duration-300"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                        <span className="text-lg font-medium pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-center mt-16"
          >
            <div className="glass rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
              <h3 className="text-h3 font-semibold mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our automation experts are here to help you find the perfect solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-accent-blue text-white rounded-full font-medium hover:bg-accent-blue/90 transition-colors"
                >
                  Contact Support
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 border border-accent-blue/50 text-accent-blue rounded-full font-medium hover:bg-accent-blue/10 transition-colors"
                  onClick={() => setShowBooking(true)}
                >
                  Schedule a Call
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 border border-accent-green/50 text-accent-green rounded-full font-medium hover:bg-accent-green/10 transition-colors"
                  onClick={openChat}
                >
                  <MessageSquare className="mr-2 w-4 h-4" />
                  Ask DentPilot AI
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  )
} 