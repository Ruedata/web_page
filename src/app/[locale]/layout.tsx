import type React from "react"
import { Inter } from "next/font/google"
import "../globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { Metadata, Viewport } from "next"
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import {routing} from '@/i18n/routing'
import {getTranslations} from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  alternates: {
    canonical: "https://ruedata.com",
    languages: {
      'en': 'https://ruedata.com/en/',
      'es': 'https://ruedata.com/es/',
      'pt': 'https://ruedata.com/pt/'
    }
  }
};

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
  const t = await getTranslations({locale});
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://ruedata.com/#website", // Unique ID for the website entity
    "name": "Ruedata", // Or "Ruedata - Software Inteligente para Llantas"
    "url": "https://ruedata.com/", // Must match the canonical homepage URL
    "publisher": {
      "@id": "https://ruedata.com/#organization" // Links to your Organization schema via its ID
    },
    "inLanguage": ["en", "es", "pt"] // Primary languages of the website content
    // --- The entire potentialAction block is removed ---
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": t('faq.question1'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('faq.answer1')
      }
    },{
      "@type": "Question",
      "name": t('faq.question2'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('faq.answer2')
      }
    },{
      "@type": "Question",
      "name": t('faq.question3'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('faq.answer3')
      }
    },{
      "@type": "Question",
      "name": t('faq.question4'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('faq.answer4')
      }
    },{
      "@type": "Question",
      "name": t('faq.question5'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('faq.answer5')
      }
    },{
      "@type": "Question",
      "name": t('faq.question6'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('faq.answer6')
      }
    },{
      "@type": "Question",
      "name": t('faq.question7'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('faq.answer7')
      }
    },{
      "@type": "Question",
      "name": t('faq.question8'),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t('faq.answer8')
      }
    }]
  }

  const companySchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Ruedata",
    "legalName": "Ruedata, Inc.",
    "url": "https://ruedata.com",
    "logo": "https://ruedata.com/logo.svg",
    "description": t('metadata.description'),
    "image": "https://ruedata.com/logo.svg",
    "sameAs": [
      "https://www.facebook.com/Ruedata",
      "https://www.linkedin.com/company/ruedata/",
      "https://www.instagram.com/ruedata/"
    ],
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dover",
        "addressRegion": "DE",
        "addressCountry": "USA",
        "postalCode": "19901",
        "streetAddress": "3500 South Dupont Highway"
    },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1 334-373-2288",
          "contactType": "customer support",
          "areaServed": ["US"],
          "availableLanguage": ["en", "es", "pt"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+52 55 5895 7246",
          "contactType": "customer support",
          "areaServed": ["MX", "CO", "BR", "CL", "PE", "AR", "EC", "PY", "PA", "UY", "CR"],
          "availableLanguage": ["en", "es", "pt"]
        },
        // {
        //   "@type": "ContactPoint",
        //   "telephone": "+52 55 5895 7246",
        //   "contactType": "customer support",
        //   "areaServed": ["CO"],
        //   "availableLanguage": ["en", "es", "pt"]
        // },
        // {
        //   "@type": "ContactPoint",
        //   "telephone": "+52 55 5895 7246",
        //   "contactType": "customer support",
        //   "areaServed": ["BR"],
        //   "availableLanguage": ["en", "es", "pt"]
        // },
      ],
    "founder": [
        {
            "@type": "Person",
            "name": "Sebastian Baquero",
            "url": "https://www.linkedin.com/in/sebastian-baquero-/"
        },
        {
            "@type": "Person",
            "name": "Jorge Quinche",
            "url": "https://www.linkedin.com/in/jorgequinche-sostenibilidad-transporte-flotas-ahorro-gestion-llantas-mobility-tecnologia-datos-ai/"
        }
    ]
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(companySchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <div className="">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}