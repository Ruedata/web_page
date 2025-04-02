import type React from "react"
import { Inter } from "next/font/google"
import "../globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { Viewport } from "next"
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import {routing} from '@/i18n/routing'
import {getTranslations} from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata({params}: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'metadata'});

  return {
    title: t('title'),
    description: t('description'),
    // icons: {
    //   icon: "/favicon.ico",
    // },
    alternates: {
      canonical: "https://ruedata.com",
      languages: {
        'en': 'https://ruedata.com/en/',
        'es': 'https://ruedata.com/es/',
        'pt': 'https://ruedata.com/pt/'
      }
    }
  };
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
  const t = await getTranslations({locale, namespace: 'metadata'});
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Ruedata",
    "legalName": "Ruedata, Inc.",
    "url": "https://ruedata.com",
    "logo": "https://ruedata.com/logo.svg",
    "description": t('description'),
    "image": "https://ruedata.com/logo.svg",
    "sameAs": [
      "https://www.facebook.com/Ruedata",
      "https://www.linkedin.com/company/ruedata/",
      "https://www.instagram.com/ruedata/"
    ],
    "inLanguage": ["en", "es", "pt"],
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dover",
        "addressRegion": "DE",
        "addressCountry": "USA",
        "postalCode": "19901",
        "streetAddress": "3500 South Dupont Highway"
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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