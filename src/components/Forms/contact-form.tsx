"use client"

import type React from "react"

import { useState } from "react"
import { submitContactForm } from "@/actions/contact-form"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    jobTitle: "",
    companySize: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(formValues)
      console.log('dasdasdasdasd')
      if (result.success) {
        toast({
          title: t('form.sent'),
          description: t('form.success'),
        })

        // Reset form
        setFormValues({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phone: "",
          jobTitle: "",
          companySize: "",
          message: "",
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.",
          variant: "destructive",
        })
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-slate-800 text-center mb-12">{t('form.title')}</h1>
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">{t('form.name')}</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">{t('form.lastname')}</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  required
                  placeholder={t('form.lastnamePlaceholder')}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('form.email')}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                  placeholder={t('form.emailPlaceholder')}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">{t('form.company')}</Label>
                <Input
                  id="company"
                  name="company"
                  value={formValues.company}
                  onChange={handleChange}
                  required
                  placeholder={t('form.companyPlaceholder')}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t('form.phone')}</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formValues.phone}
                  onChange={handleChange}
                  required
                  placeholder={t('form.phonePlaceholder')}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">{t('form.message')}</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  placeholder={t('form.messagePlaceholder')}
                  rows={4}
                />
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <Button
                type="submit"
                className="primary text-white font-medium py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('form.sending') : t('form.submit')}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  )
}
