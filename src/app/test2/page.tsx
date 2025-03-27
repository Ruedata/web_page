"use client"
import { useLanguage } from "@/components/Language-provider"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

const Test = () => {
  const { t } = useLanguage();

  return (
    <section className="container w-full md:py-8 sm:py-4 mx-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
      <div className="">
        <h1 className="sm:text-2xl lg:text-4xl font-bold text-navy-blue sm:mb-2 lg:mb-4">{t("hero.title")}</h1>
        <p className="max-w-[600px] text-gray-600 sm:text-lg/relaxed lg:text-xl/relaxed sm:mb-4 lg:mb-8">{t("hero.subtitle")}</p>
        <Link href="/get-started">
          <Button className="bg-navy-blue hover:bg-cyan-500 text-white sm:mb-8 lg:mb-8">{t("nav.get-started")}</Button>
        </Link>
      </div>
      <div className="relative h-[400px]">
        <Image
          src="/images/hero.jpg"
          alt="Tire management with AI visualization"
          fill
          className="rounded-2xl object-cover"
          priority
        />
      </div>
    </section>
  )
}

export default Test;