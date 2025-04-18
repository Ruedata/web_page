"use client"

import LanguageSwitcher from "./LanguageSwitcher"
// import Link from "next/link"
import { Link } from '@/i18n/navigation'
import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { useState } from "react"
import {useLocale, useTranslations} from 'next-intl';

const Header = () => {
  const t = useTranslations()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const locale = useLocale()

  return (
    <header className="sticky top-0 z-50 w-full bg-white px-4">
      <div className="container mx-auto flex h-8 justify-end items-center">
        <div className="flex gap-2">
          <Phone className="h-4 w-4 text-navy-blue" />
          <span className="text-sm text-navy-blue">{t('nav.phone')}</span>
        </div>
      </div>
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Ruedata Logo" width={150} height={40} className="h-10 w-auto" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-4 mr-4">
            <Link href="/about/" className="text-navy-blue hover:text-primary/90 font-medium">
              {t("nav.about")}
            </Link>
            {/* <Link href="/case-studies/" className="text-navy-blue hover:text-primary/90 font-medium">
              {t("nav.case-studies")}
            </Link> */}
          </nav>

          <LanguageSwitcher locale={locale} />

          <Link href="https://app.ruedata.com/">
            <Button variant="outline" className="text-navy-blue border-navy-blue">
              {t("nav.login")}
            </Button>
          </Link>

          <Link href="/demo/">
            <Button className="primary text-white">{t("nav.get-started")}</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-navy-blue"
          >
            {isMobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4 border-t">
          <nav className="flex flex-col space-y-4">
            {/* <Link href="/solutions" className="text-navy-blue hover:text-blue-700 font-medium">
              {t("nav.solutions")}
            </Link> */}
            <Link href="/about/" className="text-navy-blue hover:text-blue-700 font-medium">
              {t("nav.about")}
            </Link>
            <Link href="/case-studies/" className="text-navy-blue hover:text-blue-700 font-medium">
              {t("nav.case-studies")}
            </Link>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-navy-blue" />
              <span className="text-sm text-navy-blue">+1 334-373-2288</span>
            </div>
            <div className="flex gap-2">
              <LanguageSwitcher locale={locale} />
            </div>
            <div className="flex flex-col gap-2">
                <Link href="https://app.ruedata.com/" className="w-full">
                <Button variant="outline" className="text-navy-blue border-navy-blue w-full">
                  {t("nav.login")}
                </Button>
                </Link>
              <Link href="/demo/" className="w-full">
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-white w-full">{t("nav.get-started")}</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header;

