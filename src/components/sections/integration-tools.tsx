"use client"
import Marquee from 'react-fast-marquee'
import { 
    siCalendly, 
    siGooglecalendar, 
    siGooglemaps, 
    siGooglesheets,
    siOpenai,
    siGmail,
    siStripe,
    siNotion,
    siSlack,
    siTypeform,
    siWhatsapp,
    siN8n,
    siHubspot,

  } from 'simple-icons'
import { Phone, ArrowRight} from 'lucide-react'
import { useBooking } from '@/contexts/BookingContext'
const tools = [
  { icon: siCalendly },
  { icon: siGooglecalendar },
  { icon: siGooglemaps },
  { icon: siGooglesheets },
  { icon: siOpenai },
  { icon: siGmail },
  { icon: Phone },
  { icon: siStripe },
  { icon: siNotion },
  { icon: siSlack },
  { icon: siTypeform },
  { icon: siWhatsapp },
  { icon: siN8n },
  { icon: siHubspot }]

export function IntegrationTools() {
  return (
    <section className="py-16 bg-linear-to-r from-slate-900/50 to-slate-800/50 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Integrate Seamlessly with All These Tools
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Connect with 500+ tools and platforms to create the perfect automation ecosystem for your dental practice.
          </p>
        </div>

        {/* Scrolling Tools */}
        <Marquee gradient={false} speed={40} className="py-8">
          {tools.map((tool, i) => {
            // If it's a Lucide icon (React component), render as JSX
            if (typeof tool.icon === "function" && tool.icon.prototype && tool.icon.prototype.isReactComponent) {
              const Icon = tool.icon
              return (
                <div key={i} className="flex flex-col items-center space-y-2 mx-4 group">
                  <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              )
            }
            // If it's a SimpleIcon (object with .svg property), render as raw SVG
            if (typeof tool.icon === "object" && tool.icon.svg) {
              return (
                <div key={i} className="flex flex-col items-center space-y-2 mx-4 group">
                  <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                    <span
                      className="w-8 h-8 integration-icon text-white group-hover:scale-110 transition-transform duration-300"
                      dangerouslySetInnerHTML={{ __html: tool.icon.svg.replace(/fill=".*?"/g, 'fill="gray"') }}
                      style={{ display: "inline-block", width: "2rem", height: "2rem", color: "white" }}
                    />
                  </div>
                </div>
              )
            }
            // fallback
            return null
          })}
        </Marquee>
      </div>
    </section>
  )
}

// Automation Setup Section
export function AutomationSetupSection() {
  const { setShowBooking } = useBooking();
  const steps = [
    {
      title: "Discovery & Analysis",
      description: "We analyze your current workflow, identify bottlenecks, and map out your clinic's unique processes.",
      placeholder: "📊",
    },
    {
      title: "Custom Tailored Knowledge Base",
      description: "We create a comprehensive knowledge base tailored to your clinic&apos;s specific procedures, policies, prices  and patient information.",
      placeholder: "🧠",
    },
    {
      title: "System Integration",
      description: "We seamlessly integrate with your existing tools and platforms, ensuring everything works together perfectly.",
      placeholder: "🔗",
    },
    {
      title: "Testing & Launch",
      description: "We thoroughly test the system with your team and launch with full support and training.",
      placeholder: "🚀",
    },
  ];

  return (
    <section className="py-16 bg-slate-900/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our 4-Step <span className="text-gradient">Automation Setup</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            We don&apos;t just install software—we transform your entire workflow with a proven process that ensures success.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-accent-blue to-accent-green rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                {index + 1}
              </div>
              
              {/* Step Card */}
              <div className="glass rounded-2xl p-6 border border-white/10 h-full group-hover:border-accent-blue/30 transition-all duration-300">
                {/* Placeholder Image */}
                <div className="w-full h-32 bg-gradient-to-br from-accent-blue/20 to-accent-green/20 rounded-xl mb-4 flex items-center justify-center text-4xl">
                  {step.placeholder}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-accent-blue transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-body text-muted-foreground mb-6">
            Ready to start your automation journey?
          </p>
          <button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-green rounded-full text-white font-medium shadow-glow hover:shadow-2xl transition-all duration-300"
            onClick={() => setShowBooking(true)}>
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
