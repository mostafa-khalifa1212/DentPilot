import Link from "next/link"
import { Button } from "@/components/ui"
import { BackButton } from "@/components/ui/back-button"
import { Home } from "lucide-react"
import { constructMetadata } from "@/lib/seo"

export const metadata = constructMetadata({
  title: "Page Not Found - AutoPilotAI",
  description: "The page you're looking for doesn't exist. Return to AutoPilotAI homepage.",
  noIndex: true,
})

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
            <div className="w-24 h-1 bg-linear-to-r from-accent-blue to-accent-green mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <h2 className="text-h1 font-bold mb-6">
            Page Not Found
          </h2>
          <p className="text-body text-muted-foreground mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/">
                <Home className="mr-2 w-5 h-5" />
                Go Home
              </Link>
            </Button>
            <BackButton />
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <p className="text-sm text-muted-foreground mb-4">
              Looking for something specific? Try these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/#services" className="text-accent-blue hover:text-accent-blue/80 transition-colors">
                Services
              </Link>
              <Link href="/#case-studies" className="text-accent-blue hover:text-accent-blue/80 transition-colors">
                Case Studies
              </Link>
              <Link href="/#pricing" className="text-accent-blue hover:text-accent-blue/80 transition-colors">
                Pricing
              </Link>
              <Link href="/#faq" className="text-accent-blue hover:text-accent-blue/80 transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-accent-blue hover:text-accent-blue/80 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 