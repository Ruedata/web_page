"use client"

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation'
import Image from "next/image"

export default function Footer() {
  const t = useTranslations('')

  return (
    <footer className="bg-navy-blue text-white">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo-white.png" alt="Ruedata Logo" width={150} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-gray-300">{t('footer.aipower')}</p>
          </div>
          {/* <div>
            <h3 className="mb-4 text-lg font-medium">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions/tire-management" className="text-gray-300 hover:text-white">
                  Tire Management
                </Link>
              </li>
              <li>
                <Link href="/solutions/fleet-optimization" className="text-gray-300 hover:text-white">
                  Fleet Optimization
                </Link>
              </li>
              <li>
                <Link href="/solutions/sustainability" className="text-gray-300 hover:text-white">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div> */}
          {/* <div>
            <h3 className="mb-4 text-lg font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">+1 334-373-2288</li>
              <li className="text-gray-300">hello@ruedata.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Ruedata. {t("footer.rights")}
          </p>
          {/* <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-300 hover:text-white">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="text-sm text-gray-300 hover:text-white">
              {t("footer.terms")}
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

