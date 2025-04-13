"use client"

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from "next/image"
import { Link } from '@/i18n/navigation'
import { Button } from "./ui/Button"

export function CaseStudiesPage() {
  const t = useTranslations()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-blue">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-navy-blue opacity-20 rounded-bl-[200px]"></div>
        </div>
        <div className="container px-4 w-full py-16 mx-auto text-center">
          <div className="max-w-3xl mx-auto text-white z-10 relative">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
              {t("caseStudies.hero.title")}
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              {t("caseStudies.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Case Study 1 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-4xl font-bold text-navy-blue mb-6">{t("caseStudies.construction.title")}</h2>
              <p className="text-gray-600 text-lg mb-8">{t("caseStudies.construction.description")}</p>
              <ul className="text-gray-600 text-lg space-y-2 mb-4">
                <li className='flex items-center'>
                  <svg className="w-6 h-6 me-3 text-[#0091EA] dark:text-[#0091EA] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <b className='mr-2'>
                    {t('caseStudies.construction.bulletTitle1')}
                  </b>
                  {t('caseStudies.construction.bullet1')}
                </li>
                <li className='flex items-center'>
                    <svg className="w-6 h-6 me-3 text-[#0091EA] dark:text-[#0091EA] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <b className='mr-2'>
                      {t('caseStudies.construction.bulletTitle2')}
                    </b>
                    {t('caseStudies.construction.bullet2')}
                </li>
                <li className='flex items-center'>
                  <svg className="w-6 h-6 me-3 text-[#0091EA] dark:text-[#0091EA] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <b className='mr-2'>
                    {t('caseStudies.construction.bulletTitle3')}
                  </b>
                  {t('caseStudies.construction.bullet3')}
                </li>
              </ul>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-3xl font-bold text-navy-blue mb-2">20%</h3>
                  <p className="text-gray-600">{t("caseStudies.metrics.savings")}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-3xl font-bold text-navy-blue mb-2">6.4x</h3>
                  <p className="text-gray-600">{t("caseStudies.metrics.roi")}</p>
                </div>
              </div>

              <Link href="/demo/">
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  {t("caseStudies.requestDemo")}
                </Button>
              </Link>
            </div>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] order-1 lg:order-2">
              <Image
                src="/images/case-studies/construction1.png"
                alt="Construction company case study"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src="/images/case-studies/dairy2.png"
                alt="Dairy company case study"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-navy-blue mb-6">{t("caseStudies.dairy.title")}</h2>
              <p className="text-gray-600 text-lg mb-8">{t("caseStudies.dairy.description")}</p>

              <ul className="text-gray-600 text-lg space-y-2 mb-4">
                <li className='flex items-center'>
                  <svg className="w-6 h-6 me-3 text-[#0091EA] dark:text-[#0091EA] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <b className='mr-2'>
                    {t('caseStudies.dairy.bulletTitle1')}
                  </b>
                  {t('caseStudies.dairy.bullet1')}
                </li>
                <li className='flex items-center'>
                    <svg className="w-6 h-6 me-3 text-[#0091EA] dark:text-[#0091EA] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <b className='mr-2'>
                      {t('caseStudies.dairy.bulletTitle2')}
                    </b>
                    {t('caseStudies.dairy.bullet2')}
                </li>
                <li className='flex items-center'>
                  <svg className="w-6 h-6 me-3 text-[#0091EA] dark:text-[#0091EA] shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <b className='mr-2'>
                    {t('caseStudies.dairy.bulletTitle3')}
                  </b>
                  {t('caseStudies.dairy.bullet3')}
                </li>
              </ul>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-3xl font-bold text-navy-blue mb-2">30%</h3>
                  <p className="text-gray-600">{t("caseStudies.metrics.savings")}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-3xl font-bold text-navy-blue mb-2">11x</h3>
                  <p className="text-gray-600">{t("caseStudies.metrics.roi")}</p>
                </div>
              </div>

              <Link href="/demo/">
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  {t("caseStudies.requestDemo")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Cases Summary */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-navy-blue mb-6">{t("caseStudies.additional.title")}</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">{t("caseStudies.additional.description")}</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-navy-blue mb-4">{t("caseStudies.additional.case1.title")}</h3>
              <p className="text-gray-600 mb-4">{t("caseStudies.additional.case1.description")}</p>
              <div className="text-2xl font-bold text-primary">20%</div>
              <div className="text-gray-600">{t("caseStudies.metrics.savings")}</div>
            </div>

            {/* Case 2 */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-navy-blue mb-4">{t("caseStudies.additional.case2.title")}</h3>
              <p className="text-gray-600 mb-4">{t("caseStudies.additional.case2.description")}</p>
              <div className="text-2xl font-bold text-primary">35%</div>
              <div className="text-gray-600">{t("caseStudies.metrics.savings")}</div>
            </div>

            {/* Case 3 */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-navy-blue mb-4">{t("caseStudies.additional.case3.title")}</h3>
              <p className="text-gray-600 mb-4">{t("caseStudies.additional.case3.description")}</p>
              <div className="text-2xl font-bold text-primary">28%</div>
              <div className="text-gray-600">{t("caseStudies.metrics.savings")}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
