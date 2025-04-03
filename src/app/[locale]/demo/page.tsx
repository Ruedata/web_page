import type { Metadata } from "next"
import ContactForm from "@/components/Forms/contact-form"
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params
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
          <ContactForm />
        </div>
      </main>
    </div>
  )
}

