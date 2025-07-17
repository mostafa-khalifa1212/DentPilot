// components/integration-tools.tsx

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
    siMailchimp,
    siQuickbooks
  } from 'simple-icons'
import { Phone} from 'lucide-react'

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
    <section className="py-16 bg-gradient-to-r from-slate-900/50 to-slate-800/50 overflow-hidden">
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
                      // eslint-disable-next-line react/no-danger
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
