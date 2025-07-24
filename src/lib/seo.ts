import { Metadata } from "next"

export const siteConfig = {
  name: "Dent Pilot",
  description: "Transform your dental practice with cutting-edge Dental AI Automation and Dental AI Agents. Dent Pilot helps clinics streamline operations, boost revenue, and fill chairs with intelligent automation solutions.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://dentpilot.dev",
  ogImage: "/assets/images/DentPilotLogo.png",
  author: "Dent Pilot Team",
  keywords: [
    "Dental AI",
    "AI automation",
    "dental automation",
    "workflow optimization",
    "dental marketing",
    "AI integration",
    "digital transformation",
    "productivity tools",
    "intelligent automation",
    "machine learning",
    "Dental AI Automation",
    "dental ai automation",
    "Dental AI Agents",
    "dental ai agents",
  ],
}

export function constructMetadata({
  title = `${siteConfig.name} - AI Automation Agency`,
  description = siteConfig.description,
  image,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  const ogImage = image || `${siteConfig.url}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`
  return {
    title,
    description,
    keywords: siteConfig.keywords,
    authors: [
      {
        name: siteConfig.author,
      },
    ],
    creator: siteConfig.author,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: "/assets/images/DentPilotLogo.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@dentpilot",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

// JSON-LD Structured Data
export const generateServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Automation Services",
    description: "Professional AI automation solutions for businesses",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: "AI Automation",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Automation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Patient Onboarding",
            description: "Automatically send personalized onboarding messages to your new patients, get their medical history, reason for visit, send pre-visit instructions, reminders and more.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI 24/7 Live Chatbot",
            description: "Answers all of your patients questions and book appointments, tailored to your clinic's policies, open time slots and prices.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Voice Call Receptionist",
            description: "Answer all of your patients' calls and schedule appointments with our AI voice call receptionist, just like a professional receptionist that doesnt get tired or make mistakes, so no missed calls from now on, and it's much cheaper than a normal receptionist!",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Patient Reactivation And Followup",
            description: "Reactivate patients that haven't visited in a while, and follow up with them to get them back to your clinic, get feedback, and more.",
          },
        },
      ],
    },
  }
}

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    address: {
      addressLocality: "Remote"
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$1000-$10000/month",
  }
}

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon0.svg`,
    description: siteConfig.description,
    foundingDate: "2025",
    founders: [
      {
        "@type": "Person",
        name: "Mostafa Khalifa",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@dentpilot.dev",
      contactType: "customer service",
      availableLanguage: "English, Arabic",
    },
    sameAs: [
      "https://twitter.com/dentpilot",
      "https://linkedin.com/company/dentpilot",
      "https://github.com/mostafa-khalifa1212/DentPilot",
    ],
  }
}

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }
} 