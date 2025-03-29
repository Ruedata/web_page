"use client"

import { HomePage } from '@/components/HomePage';
import { useTranslations } from 'next-intl';

export default function LocalePage() {
  const t = useTranslations();
  return <HomePage />;
}
