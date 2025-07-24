import { HeroSection, FeatureGrid, CTASection, FaqAccordion, IntegrationTools, AutomationSetupSection, PricingSection } from "@/components/sections"

import { constructMetadata } from "@/lib/seo"

export const metadata = constructMetadata({
  title: "Dent Pilot - Transform Your Dental Practice with AI Automation",
  description: "AI Systems, Built By Dentists, For Dentists",
})

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Integration Tools Section */}
      <IntegrationTools />
      
      {/* Automation Setup Section */}
      <AutomationSetupSection />
      
      {/* Feature Grid Section */}
      <FeatureGrid />

      {/* Pricing Section */}
      <PricingSection />
      
      {/* CTA Section */}
      <CTASection
        title="Ready to Automate Your Clinic?"
        description="Join thousands of clinics already transforming their operations with Dent Pilot. Start your automation journey today and see results within 48 hours."
        primaryText="Start Free Trial"
        primaryHref="#contact"
        secondaryText="Book Demo"
        secondaryHref="#demo"
      />
      
      {/* FAQ Section */}
      <FaqAccordion />
      
      {/* Final CTA Section */}
      <CTASection
        variant="compact"
        title="Transform Your Clinic Today"
        description="Don't let manual processes hold you back. Join the automation revolution and scale your business like never before."
        primaryText="Get Started Now"
        primaryHref="#contact"
        secondaryText=""
        showSparkles={false}
          />
    </>
  )
}
