import { CaseStudiesPage } from '@/components/CaseStudiesPage';
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'caseStudies.hero' })

  return {
    title: t('title'),
    description: t('subtitle'),
  }
}

export default function CaseStudiesPageRoute() {
  return <CaseStudiesPage />;
}
