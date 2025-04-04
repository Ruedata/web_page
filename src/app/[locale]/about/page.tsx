import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import AboutPageClient from './client';

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: `RueData - ${t('title')}`,
    description: t('description'),
  };
}

export default function AboutPage() {
  return <AboutPageClient />;
}
