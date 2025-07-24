import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  services: [
    { name: "AI Receptionist", href: "/services/ai-receptionist" },
    { name: "Patient Followup", href: "/services/patient-followup" },
    { name: "Patient Onboarding", href: "/services/patient-onboarding" },
    { name: "All Services", href: "#services" },
    { name: "Integration Tools", href: "#integration-tools" },
    { name: "Automation Setup", href: "#automation-setup" },
    { name: "Pricing", href: "#pricing" },
  ],
  company: [
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/autopilotai", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/autopilotai", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/mostafa-khalifa1212/DentPilot", icon: Github },
  { name: "Email", href: "mailto:support@dentpilot.dev", icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/50">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/assets/images/DentPilotLogo.png" alt="Dent Pilot logo" width={300} height={100} className="rounded-lg" />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Transform your business with cutting-edge AI automation. 
              Streamline operations, boost productivity, and unlock growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent-blue transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dent Pilot. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-accent-blue transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-accent-blue transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 