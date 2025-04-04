"use client";

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Link } from '@/i18n/navigation';
import { Button } from "@/components/ui/Button";

export default function AboutPageClient() {
  const t = useTranslations('about');
  const globalT = useTranslations();
  
  const sectionTitles = {
    en: {
      mission: 'Mission',
      challenge: 'Challenge',
      solution: 'Solution'
    },
    es: {
      mission: 'Misión',
      challenge: 'Desafío',
      solution: 'Solución'
    },
    pt: {
      mission: 'Missão',
      challenge: 'Desafio',
      solution: 'Solução'
    }
  };
  
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const currentLocale = pathname.split('/')[1] || globalT.locale || 'en';
  
  return (
    <div className="min-h-screen">
      {/* Hero Section with All Content */}
      <section className="container px-4 w-full py-8 mx-auto mt-4">
        {/* Hero Header */}
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mb-12">
          <div className="flex justify-center flex-col">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-navy-blue mb-2 lg:mb-8 self-start">{t("title")}</h1>
            <p className="max-w-[600px] text-gray-600 text-lg/relaxed lg:text-xl/relaxed mb-4 lg:mb-8">{t("subtitle")}</p>
            <Link href="/demo/">
              <Button className="bg-primary text-white mb-8 lg:mb-8">{globalT("nav.get-started")}</Button>
            </Link>
          </div>
          <div className="relative h-[300px] sm:h-[400px]">
            <Image
              src="/images/home/jefe.jpg"
              alt="About Ruedata"
              fill
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Description */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-gray-600 mb-8 text-center">
            {t("description")}
          </p>
          <hr className="border-t-2 border-gray-200 mb-8 w-24 mx-auto" />
        </div>
        
        {/* Content Sections */}
        <div className="space-y-8 mb-12">
          {/* Mission Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-navy-blue mb-4">{sectionTitles[currentLocale]?.mission || sectionTitles.en.mission}</h2>
            <p className="text-gray-600">{t("mission")}</p>
          </div>
          
          {/* Challenge Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-navy-blue mb-4">{sectionTitles[currentLocale]?.challenge || sectionTitles.en.challenge}</h2>
            <p className="text-gray-600">{t("challenge")}</p>
          </div>
          
          {/* Solution Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-navy-blue mb-4">{sectionTitles[currentLocale]?.solution || sectionTitles.en.solution}</h2>
            <p className="text-gray-600">{t("solution")}</p>
          </div>
        </div>
        
        {/* Tagline */}
        <div className="max-w-3xl mx-auto text-center bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-navy-blue">
            {t("tagline")}
          </h2>
        </div>
      </section>
    </div>
  );
}
