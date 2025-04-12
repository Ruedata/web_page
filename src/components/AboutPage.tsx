"use client"

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from "next/image"
import Hero from "./Hero"
import LeftRightSection from "./LeftRightSection"

export function AboutPage() {
  const t = useTranslations()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero
        title="about.hero.title"
        subtitle="about.hero.subtitle"
        image="/images/about-hero.jpg"
      />

      {/* Mission Section */}
      <section className="w-full py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-navy-blue mb-4">{t("about.mission.title")}</h2>
            <p className="text-gray-600 text-lg/relaxed">{t("about.mission.description")}</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-navy-blue mb-4">{t("about.vision.title")}</h2>
            <p className="text-gray-600 text-lg/relaxed">{t("about.vision.description")}</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-navy-blue mb-8 text-center">{t("about.team.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <div className="relative h-64 w-64 rounded-full overflow-hidden mb-4">
                <Image
                  src="/images/sebastian.jpg"
                  alt={t("about.team.sebastian.name")}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-navy-blue">{t("about.team.sebastian.name")}</h3>
              <p className="text-gray-600">{t("about.team.sebastian.position")}</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <div className="relative h-64 w-64 rounded-full overflow-hidden mb-4">
                <Image
                  src="/images/jorge.jpg"
                  alt={t("about.team.jorge.name")}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-navy-blue">{t("about.team.jorge.name")}</h3>
              <p className="text-gray-600">{t("about.team.jorge.position")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
