"use client"

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from "next/image"
import Hero from "./Hero"
import { Link } from '@/i18n/navigation'
import { Button } from "./ui/Button"
import { carouselItems } from "../data/features"

export function CaseStudiesPage() {
  const t = useTranslations()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero
        title="caseStudies.hero.title"
        subtitle="caseStudies.hero.subtitle"
        image="/images/case-studies-hero.jpg"
      />

      {/* Case Studies Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-navy-blue mb-8 text-center">{t("caseStudies.companies.title")}</h2>
          <p className="text-gray-600 text-lg/relaxed text-center max-w-3xl mx-auto mb-12">{t("caseStudies.companies.description")}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study Cards - using the existing carousel items data */}
            {carouselItems.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={study.image}
                    alt={t(study.title)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-blue mb-2">{t(study.title)}</h3>
                  <p className="text-gray-600 mb-4">{t(study.description)}</p>
                  <Link href="/demo/">
                    <Button className="bg-primary text-white">{t("nav.get-started")}</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
