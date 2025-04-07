"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { useTranslations } from "next-intl"

export default function AboutPage() {
  // Load translations from messages (namespace: "AboutPage")
  // const {locale} = await params;
  // const t = await getTranslations(locale)
  const t = useTranslations()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-primary/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-navy-blue">
                  {t("about.title")}
                </h1>
                <p className="max-w-[600px] text-gray-600 text-lg/relaxed lg:text-xl/relaxed mb-4 lg:mb-8">
                  {t("about.subtitle")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <Image
                  src="/images/about/founders.jpg"
                  alt="Ruedata founders standing in front of a green bus with tires"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter text-navy-blue">
                  {t("about.mission.title")}
                </h2>
                <p className="text-gray-600 text-lg/relaxed lg:text-xl/relaxed mb-4 lg:mb-8">
                  {t("about.mission.text1")}
                </p>
                <p className="text-gray-600 text-lg/relaxed lg:text-xl/relaxed mb-4 lg:mb-8">
                  {t("about.mission.text2")}
                </p>
                <p className="text-gray-600 text-lg/relaxed lg:text-xl/relaxed mb-4 lg:mb-8">
                  {t("about.mission.text3")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-navy-blue">
                  {t("about.impact.title")}
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  {t("about.impact.subtitle")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm min-h-[250px]">
                <div className="rounded-full bg-sky-100 p-3">
                  <CheckCircle className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-blue">
                  {t("about.impact.cost.title")}
                </h3>
                <p className="text-gray-600 text-center text-muted-foreground">
                  {t("about.impact.cost.text")}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm min-h-[250px]">
                <div className="rounded-full bg-sky-100 p-3">
                  <CheckCircle className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-blue">
                  {t("about.impact.sustainability.title")}
                </h3>
                <p className="text-gray-600 text-center text-muted-foreground">
                  {t("about.impact.sustainability.text")}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm min-h-[250px]">
                <div className="rounded-full bg-sky-100 p-3">
                  <CheckCircle className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-blue">
                  {t("about.impact.safety.title")}
                </h3>
                <p className="text-gray-600 text-center text-muted-foreground">
                  {t("about.impact.safety.text")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-navy-blue">
                  {t("about.partners.title")}
                </h2>
                <p className="text-gray-600 max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  {t("about.partners.subtitle")}
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-8 py-8">
                <div className="flex h-20 w-48 items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                  <Image
                    src="/images/logos/heineken.png"
                    alt="Heineken logo"
                    width={150}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex h-20 w-48 items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                  <Image
                    src="/images/logos/bimbo.png"
                    alt="Bimbo logo"
                    width={150}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex h-20 w-48 items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                  <Image
                    src="/images/logos/cemex.png"
                    alt="Cemex logo"
                    width={150}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex h-20 w-48 items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                  <Image
                    src="/images/logos/solar-coca-cola.png"
                    alt="Solar Coca-Cola logo"
                    width={150}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-navy-blue">
                  {t("about.cta.title")}
                </h2>
                <p className="text-gray-600 md:text-xl/relaxed">
                  {t("about.cta.text")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-end">
                <Link href="/demo/">
                  <Button size="lg" className="bg-primary text-white">
                    {t("about.cta.button")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}