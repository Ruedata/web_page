"use client";

import { useTranslations } from 'next-intl';
import Hero from "@/components/Hero";

export default function AboutPageClient() {
  const t = useTranslations('about');
  
  return (
    <div className="min-h-screen">
      {/* Hero Section with All Content */}
      <Hero
        title="about.title"
        subtitle="about.fullContent"
        image="/images/home/jefe.jpg"
      />
    </div>
  );
}
