"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui"
import { cn } from "@/lib/utils"
import Image from "next/image"
import BookingStepperForm from '../ui/BookingStepperForm';

const navigation = [
  { name: "Integration Tools", href: "#integration-tools" },
  { name: "How We Do It", href: "#automation-setup" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(currentScrollY > 0)

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY.current && currentScrollY > 32) {
            // Scrolling down
            setShowHeader(false)
          } else {
            // Scrolling up
            setShowHeader(true)
          }
          lastScrollY.current = currentScrollY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50"
          : "bg-transparent",
        showHeader
          ? "translate-y-0"
          : "-translate-y-full",
        "will-change-transform"
      )}
      style={{
        transitionProperty: "background-color, border-color, box-shadow, transform",
      }}
    >
      <nav className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/assets/images/DentPilotLogo.png" alt="Dent Pilot logo" width={160} height={70} className="rounded-lg" priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent-blue focus:text-accent-blue focus:outline-hidden"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Button 
            size="sm" 
            glow
            className="animate-pulse-glow"
            onClick={() => setShowBooking(true)}
          >
            Book a Call
          </Button>
          
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground focus:outline-hidden focus:text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-md">
          <div className="container-custom py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground transition-colors hover:text-accent-blue focus:text-accent-blue focus:outline-hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button 
                size="sm" 
                glow 
                className="w-full"
                onClick={() => {
                  setShowBooking(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Book Call
              </Button>
            </div>
          </div>
        </div>
      )}
      {showBooking && <BookingStepperForm onClose={() => setShowBooking(false)} />}
    </header>
  )
} 