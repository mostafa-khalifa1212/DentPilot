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
          url: ogImage,
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
            name: "Process Automation",
            description: "Automate repetitive business processes with AI",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Integration",
            description: "Seamlessly integrate AI into existing workflows",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Workflow Optimization",
            description: "Optimize business workflows using artificial intelligence",
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
    telephone: "+1-555-AUTOPILOT",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Innovation Drive",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.7749",
      longitude: "-122.4194",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$$$",
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
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "Dent Pilot Founders",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Innovation Drive",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-AUTOPILOT",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [
      "https://twitter.com/dentpilot",
      "https://linkedin.com/company/dentpilot",
      "https://github.com/dentpilot",
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