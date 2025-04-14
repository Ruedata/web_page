"use client"

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from "next/image"
import { Link } from '@/i18n/navigation'
import { Button } from "./ui/Button"
import { MapPinIcon } from 'lucide-react';

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
              <Link href="/demo/">
                <Button className="bg-primary text-white mb-8 lg:mb-8">{t("nav.get-started")}</Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px]">
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
                className="object-cover rounded-2xl"
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

      {/* Vision Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute bottom-0 right-0 w-1/3 h-3/4">
          <div className="absolute top-0 right-0 w-full h-full bg-navy-blue opacity-10 rounded-tl-[150px]"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h2 className="text-2xl sm:text-4xl font-bold text-navy-blue mb-6">{t("about.office.title")}</h2>
                <p className="text-gray-600 max-w-[600px] text-xl mb-4">
                  <MapPinIcon strokeWidth={3} className="inline mr-2 ml-[-4px] mb-[8px]" />
                  <b className="mr-2">Chattanooga, USA:</b>
                  {t("about.office.description")}
                </p>
            </div>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src="/images/office.jpg"
                alt="Our vision"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
