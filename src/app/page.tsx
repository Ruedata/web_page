"use client"

import { useLanguage } from "@/components/Language-provider"
import Image from "next/image"

import CarouselLogos from "@/components/CarouselLogos/CarouselLogos"
import Hero from "@/components/Hero"
import LeftRightSection from "@/components/LeftRightSection"
import { features, images, partnersImages, backedByImages, carouselItems } from "@/data/features";
import LogoPartners from "@/components/LogoPArtners/LogoPartners"
import Carousel from "@/components/Carousel/Carousel"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <Hero
        title="hero.title"
        subtitle="hero.subtitle"
        image="/images/hero.jpg"
      />

      {/* Indicators Section */}
      <section className="w-full py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-bold text-navy-blue">40K+</h3>
          <p className="text-gray-600 text-lg">{t("indicators.vehicles")}</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-bold text-navy-blue">400K+</h3>
          <p className="text-gray-600 text-lg">{t("indicators.tires")}</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-bold text-navy-blue">15M+</h3>
          <p className="text-gray-600 text-lg">{t("indicators.costSavings")}</p>
        </div>
          </div>
        </div>
      </section>

     {/* Solution Section */}
      <section className="w-full mt-16">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-navy-blue mb-8">
            {t("features.title")}
          </h2>
          <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center px-4">
            {t("features.content")}
          </p>
        </div>
      </section>

      <section className="w-full lg:py-4">
        <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-8 justify-between items-center">

            {/* Image 1 */}
            <div className="w-full md:w-1/3 sm:max-w-[400px] relative group h-[300px] sm:h-[600px]">
              <Image
              src="/images/maintenance.jpg"
              alt="maintenance team"
              fill
              className="rounded-lg object-cover w-full h-auto"
              />
                <div className="absolute inset-0 bg-black/[.06] text-white p-4 rounded-lg flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">
                  {t("features.maintenanceTeam")}
                </h3>
                <p className="text-lg hidden transform group-hover:block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {t("features.maintenanceTeamParagraph")}
                </p>
                </div>
            </div>

            {/* Image 2 */}
            <div className="w-full md:w-1/3 md:mt-32 sm:max-w-[400px] relative group h-[300px] sm:h-[600px]">
              <Image
                src="/images/procurement.jpg"
                alt="procurement"
                fill
                className="rounded-lg object-cover w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/[.06] text-white p-4 rounded-lg flex flex-col justify-end group">
                <h3 className="text-2xl font-bold mb-2">
                  {t("features.procurement")}
                </h3>
                <p
                  className="text-lg hidden group-hover:block transition-all duration-5000"
                  style={{ animation: "fadeIn 1s ease-in-out" }}
                >
                  {t("features.procurementParagraph")}
                </p>
                </div>
            </div>

            {/* Image 3 */}
            <div className="w-full md:w-1/3 sm:max-w-[400px] relative group h-[300px] sm:h-[600px]">
              <Image
                src="/images/fleet_manager.jpg"
                alt="fleet manager"
                fill
                className="rounded-lg object-cover w-full h-auto"
              />
               <div className="absolute inset-0 bg-black/[.06] text-white p-4 rounded-lg flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">
                  {t("features.fleetManager")}
                </h3>
                <p className="text-lg hidden group-hover:block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {t("features.fleetManagerParagraph")}
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto">
            <div className="flex flex-col items-center overflow-hidden">
            <h2 className="text-2xl sm:text-4xl text-2xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-navy-blue mb-8">
              {t("trustedBy.title")}
            </h2>
              <CarouselLogos
                images={images}
              />
            </div>
        </div>
      </section>

      {/* Features section */}
      <section>
        <div className="container px-4 w-full md:py-8 sm:py-4 mx-auto mt-4">
          <h2 className="text-2xl sm:text-4xl text-2xl sm:text-4xl md:text-5xl font-bold text-center text-navy-blue mb-2 lg:mb-4">{t('features.smarterTitle')}</h2>
          <p className="max-w-[600px] mx-auto text-center text-gray-600 text-lg/relaxed lg:text-xl/relaxed mb-4 lg:mb-8">{t('features.smarterParagraph')}</p>
        </div>
        {features.map((item, index: number) => (
          <LeftRightSection
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            ul={item.ul}
            left={!(index%2)}
            image={item.image}
            button={item.button}
            link={item.link}
          />
        ))}
      </section>

      <section className="container px-4 w-full md:py-8 sm:py-4 mx-auto mt-4">
        <div>
          <h2 className="text-2xl text-center lg:text-4xl font-bold text-navy-blue mb-4 lg:mb-8">{t('partners.title')}</h2>
        </div>
        <LogoPartners
          images={partnersImages}
        />
      </section>

      <section className="w-full py-12 md:py-16 bg-gray-200">
        <div className="container px-4 w-full md:py-8 sm:py-4 mx-auto mt-4">
          <div>
            <h2 className="text-2xl text-center sm:text-4xl text-2xl sm:text-4xl md:text-5xl font-bold text-navy-blue mb-4 lg:mb-8">{t('case.studies')}</h2>
          </div>
        <Carousel items={carouselItems} autoPlay={false} />
        </div>
      </section>

      <section className="container px-4 w-full md:py-8 sm:py-4 mx-auto mt-4">
        <div>
          <h3 className="text-2xl text-center sm:text-4xl text-2xl sm:text-4xl md:text-5xl font-bold text-navy-blue mb-4 lg:mb-8">{t('backedBy.title')}</h3>
        </div>
        <LogoPartners
          images={backedByImages}
        />
      </section>
    </div>
  )
}

