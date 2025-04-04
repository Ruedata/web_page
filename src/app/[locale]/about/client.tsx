"use client";

import { useTranslations } from 'next-intl';
import Hero from "@/components/Hero";
import LeftRightSection from "@/components/LeftRightSection";

export default function AboutPageClient() {
  const t = useTranslations('about');
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="about.title"
        subtitle="about.subtitle"
        image="/images/home/jefe.jpg"
      />

      {/* Mission Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 text-center">
              {t("description")}
            </p>
            <hr className="border-t-2 border-gray-200 mb-8 w-24 mx-auto" />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="w-full">
        <div className="container px-4 w-full md:py-8 sm:py-4 mx-auto mt-4">
          {/* Mission Section */}
          <LeftRightSection
            title="about.mission"
            subtitle="about.mission"
            ul={[]}
            image="/images/tablet2.jpg"
            left={false}
          />

          {/* Challenge Section */}
          <LeftRightSection
            title="about.challenge"
            subtitle="about.challenge"
            ul={[]}
            image="/images/maintenance.jpg"
            left={true}
          />

          {/* Solution Section */}
          <LeftRightSection
            title="about.solution"
            subtitle="about.solution"
            ul={[]}
            image="/images/fleet_manager.jpg"
            left={false}
          />
        </div>
      </section>

      {/* Tagline Section */}
      <section className="w-full py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-navy-blue mb-4">
              {t("tagline")}
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
