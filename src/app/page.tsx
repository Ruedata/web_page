"use client"

import { useLanguage } from "@/components/Language-provider"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import Carousel from "@/components/Carousel/Carousel"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">

              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-navy-blue mb-8">
                {t("hero.title")}
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("hero.subtitle")}
              </p>
            <div>
                <Link href="/get-started">
                  <Button className="bg-cyan-400 hover:bg-cyan-500 text-white">{t("nav.get-started")}</Button>
                </Link>
              </div>
          </div>
          <div className="flex items-end relative justify-end md:h-[400px] sm:h-[200px]">
            <Image
              src="/images/hero.jpg"
              alt="Tire management with AI visualization"
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
          </div>
        </div>
      </section>

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
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-navy-blue mb-8">
            {t("features.title")}
          </h2>
          <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mb-12 md:mb-20 px-4">
            {t("features.content")}
          </p>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-8 justify-between items-center">
            {/* Image 1 */}
            <div className="w-full md:w-1/3 max-w-[400px] relative group">
              <Image
              src="/images/temp1.webp"
              alt="Temporary Image 1"
              width={400}
              height={300}
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
            <div className="w-full md:w-1/3 max-w-[400px] md:mt-24 relative group">
              <Image
                src="/images/temp2.webp"
                alt="Temporary Image 2"
                width={400}
                height={300}
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
            <div className="w-full md:w-1/3 max-w-[400px] relative group">
              <Image
                src="/images/temp3.webp"
                alt="Temporary Image 3"
                width={400}
                height={300}
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

      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto">
            <div className="flex flex-col items-center overflow-hidden">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-navy-blue mb-8">
              {t("trustedBy.title")}
            </h2>
              <Carousel
              images={[
                '/images/logos_mono/1.png',
                '/images/logos_mono/2.png',
                '/images/logos_mono/3.png',
                '/images/logos_mono/4.png',
                '/images/logos_mono/5.png',
                '/images/logos_mono/6.png',
                '/images/logos_mono/7.png',
                '/images/logos_mono/8.png',
                '/images/logos_mono/9.png',
                '/images/logos_mono/10.png',
              ]}
              />
            </div>
        </div>
      </section>

    </div>

  )
}

