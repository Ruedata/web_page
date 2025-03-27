import ContactForm from "@/components/Forms/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "RueData",
  description: "Contact us for more information",
}

export default function ContactPage() {
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

