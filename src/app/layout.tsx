import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import ChatWidget from "@/components/sections/chat-widget"

import { constructMetadata, generateOrganizationSchema, generateWebsiteSchema, generateServiceSchema, generateFAQSchema } from "@/lib/seo"
import Script from "next/script";


const inter = Inter({
  variable: "--font-code-pro",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S0R52HP7TJ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S0R52HP7TJ');
          `}
        </Script>
      <meta name="apple-mobile-web-app-title" content="Dent Pilot" />
      <meta name="theme-color" content="#616161" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/assets/images/favicon.ico" />
      <link rel="apple-touch-icon" sizes="192x192" href="/assets/images/web-app-manifest-192x192.png" />
      <link rel="apple-touch-icon" sizes="512x512" href="/assets/images/web-app-manifest-512x512.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              generateOrganizationSchema(),
              generateWebsiteSchema(),
              generateServiceSchema(),
              generateFAQSchema([
                { question: "What is AI automation?", answer: "AI automation uses artificial intelligence to streamline and optimize business processes, reducing manual work and increasing efficiency." },
                { question: "How quickly can I see results?", answer: "Most clients see measurable improvements within 2-4 weeks of implementation, with full optimization typically achieved within 3 months." },
                { question: "Is AI automation secure?", answer: "Yes, we implement enterprise-grade security measures including data encryption, access controls, and compliance with industry standards like SOC 2 and GDPR." },
                { question: "What types of processes can be automated?", answer: "We can automate a wide range of processes including data entry, customer service, inventory management, financial reporting, and workflow approvals." },
                { question: "Do I need technical expertise to use your solutions?", answer: "No technical expertise required. Our solutions are designed to be user-friendly, and we provide comprehensive training and ongoing support." }
              ])
            ]),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased dark`}>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatWidget />
          </div>
      </body>
    </html>
  )
}
