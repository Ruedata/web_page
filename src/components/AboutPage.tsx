"use client"

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from "next/image"
import { Link } from '@/i18n/navigation'
import { Button } from "./ui/Button"

export function AboutPage() {
  const t = useTranslations()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-blue">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-navy-blue-light opacity-20 rounded-bl-[200px]"></div>
        </div>
        <div className="container px-4 w-full py-16 mx-auto grid lg:grid-cols-2 gap-12">
          <div className="flex justify-center flex-col text-white z-10">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
              {t("about.hero.title")}
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              {t("about.hero.description")}
            </p>
            <div>
              <Link href="/contact/">
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  {t("about.hero.contactButton")}
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] lg:h-full">
            <Image
              src="/images/home/jefe.jpg"
              alt="Ruedata team"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute bottom-0 left-0 w-1/3 h-3/4">
          <div className="absolute top-0 right-0 w-full h-full bg-navy-blue opacity-10 rounded-tr-[150px]"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src="/images/truck-drives-fast-highway-bright-sun-with-sunbeams-blue-sky (1).jpg"
                alt="Our vision"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="z-10">
              <h2 className="text-2xl sm:text-4xl font-bold text-navy-blue mb-6">{t("about.vision.title")}</h2>
              <p className="text-gray-600 text-lg mb-4">{t("about.vision.description.paragraph1")}</p>
              <p className="text-gray-600 text-lg mb-4">{t("about.vision.description.paragraph2")}</p>
              <p className="text-gray-600 text-lg mb-4">{t("about.vision.description.paragraph3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-navy-blue mb-4">{t("about.team.title")}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">{t("about.team.description")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/sebastian.jpg"
                  alt={t("about.team.sebastian.name")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-blue">{t("about.team.sebastian.name")}</h3>
                <p className="text-gray-600">{t("about.team.sebastian.position")}</p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/jorge.jpg"
                  alt={t("about.team.jorge.name")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-blue">{t("about.team.jorge.name")}</h3>
                <p className="text-gray-600">{t("about.team.jorge.position")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
