"use client"

import { useLanguage } from "@/components/Language-provider"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-navy-blue">
                  {t("hero.title")}
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("hero.subtitle")}
                </p>
              </div>
              <div>
                <Link href="/get-started">
                  <Button className="bg-cyan-400 hover:bg-cyan-500 text-white">{t("nav.get-started")}</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/hero.jpg"
                alt="Tire management with AI visualization"
                width={600}
                height={400}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center text-navy-blue mb-12">{t("solution.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature cards would go here */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
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
                  className="text-cyan-500"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-navy-blue">Cost Savings</h3>
              <p className="text-gray-600">Save up to 30% on tire expenses with our AI-powered management system.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
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
                  className="text-cyan-500"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-navy-blue">Improved Safety</h3>
              <p className="text-gray-600">
                Enhance fleet safety with predictive maintenance and real-time monitoring.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
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
                  className="text-cyan-500"
                >
                  <path d="M12 3a9 9 0 1 0 9 9" />
                  <path d="M12 3v6" />
                  <path d="M16.24 7.76l-2.12 2.12" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-navy-blue">Sustainability</h3>
              <p className="text-gray-600">
                Reduce environmental impact through optimized tire usage and extended lifespan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

