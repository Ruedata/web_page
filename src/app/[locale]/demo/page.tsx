import type { Metadata } from 'next'
import LeadConnectorForm from "@/components/Forms/LeadConnectorForm"
import { getTranslations } from 'next-intl/server'

type MetadataProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: `RueData - ${t('demo.title')}`,
    description: t('demo.description'),
  }
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <LeadConnectorForm />
        </div>
      </main>
    </div>
  )
}

