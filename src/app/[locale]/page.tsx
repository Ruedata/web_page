import { HomePage } from '@/components/HomePage';
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
// title: t('title'),
// description: t('description'),

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
  }
}


export default function LocalePage() {
  return <HomePage />;
}
