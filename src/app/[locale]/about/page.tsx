import { AboutPage } from '@/components/AboutPage';
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about.hero' })

  return {
    title: t('title'),
    description: t('subtitle'),
  }
}

export default function AboutPageRoute() {
  return <AboutPage />;
}
