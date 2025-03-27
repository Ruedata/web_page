import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/Language-provider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { Viewport } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ruedata - Tire Management with AI",
  description: "Software that saves up to 30% on tire expenses while improving fleet safety and sustainability",
}

export const viewport: Viewport = {
  themeColor: "#0a2463",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ruedata",
    url: "https://ruedata.com",
    description: metadata.description,
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ruedata.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <link rel="alternate" hrefLang="en" href="https://ruedata.com/" />
        <link rel="alternate" hrefLang="pt" href="https://ruedata.com/pt/" />
        <link rel="alternate" hrefLang="es" href="https://ruedata.com/es/" />
        <link rel="alternate" hrefLang="x-default" href="https://ruedata.com" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <div className="">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
