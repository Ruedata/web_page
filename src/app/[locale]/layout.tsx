import type React from "react"
import { Inter } from "next/font/google"
import "../globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LocalizedHead from "@/components/LocalizedHead"
import type { Viewport } from "next"
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import {routing} from '@/i18n/routing'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ruedata - Tire Management with AI",
  description: "Software that saves up to 30% on tire expenses while improving fleet safety and sustainability",
  alternates: {
    canonical: "https://ruedata.com",
    languages: {
      'en': 'https://ruedata.com/',
      'es': 'https://ruedata.com/es/',
      'pt': 'https://ruedata.com/pt/'
    }
  }
}

export const viewport: Viewport = {
  themeColor: "#0a2463",
  width: "device-width",
  initialScale: 1,
}


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ruedata",
    url: "https://ruedata.com",
    description: metadata.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://ruedata.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string",
    },
    image: "https://ruedata.com/logo.svg",
    sameAs: [
      "https://www.facebook.com/Ruedata",
      "https://www.linkedin.com/company/ruedata/",
      "https://www.instagram.com/ruedata/"
    ],
    inLanguage: ["en", "es", "pt"], // English, Spanish, Portuguese
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <link rel="alternate" hrefLang="en" href="https://ruedata.com/en/" />
        <link rel="alternate" hrefLang="pt" href="https://ruedata.com/pt/" />
        <link rel="alternate" hrefLang="es" href="https://ruedata.com/es/" />
        <link rel="alternate" hrefLang="x-default" href="https://ruedata.com/" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <div className="">
            <LocalizedHead />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
