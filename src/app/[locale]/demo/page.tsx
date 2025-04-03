import type { Metadata } from "next"
import ContactForm from "@/components/Forms/contact-form"

export const metadata: Metadata = {
  title: "RueData - Schedule Demo",
  description: "Schedule a demo of RueData's tire management solution",
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

