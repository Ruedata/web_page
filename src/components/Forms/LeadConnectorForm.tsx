"use client"

import React, { useEffect, useRef } from "react"
import { useLocale } from 'next-intl'
import { useTranslations } from 'next-intl'
import { Card, CardContent } from "@/components/ui/card"

export default function LeadConnectorForm() {
  const locale = useLocale() as 'en' | 'es' | 'pt'
  const t = useTranslations()
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://link.msgsndr.com/js/form_embed.js"
    script.async = true
    script.onload = () => {
      console.log("Lead Connector script loaded successfully")
    }
    document.body.appendChild(script)
    
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script)
      }
    }
  }, [])
  
  const formConfig = {
    en: {
      src: "https://api.leadconnectorhq.com/widget/form/wbJPiAMZ0JfaOuevmOtT",
      id: "inline-wbJPiAMZ0JfaOuevmOtT",
      formName: "Web Form EN",
      height: "640",
      formId: "wbJPiAMZ0JfaOuevmOtT"
    },
    es: {
      src: "https://api.leadconnectorhq.com/widget/form/XUk9LX4c3kzXbpIY9WbT",
      id: "inline-XUk9LX4c3kzXbpIY9WbT",
      formName: "Web Form ES",
      height: "606",
      formId: "XUk9LX4c3kzXbpIY9WbT"
    },
    pt: {
      src: "https://api.leadconnectorhq.com/widget/form/wJI52MqrywZ8RGvZ8Eq7",
      id: "inline-wJI52MqrywZ8RGvZ8Eq7",
      formName: "Web Form PT",
      height: "606",
      formId: "wJI52MqrywZ8RGvZ8Eq7"
    }
  }
  
  const currentForm = formConfig[locale]
  
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = ''
      
      const iframe = document.createElement('iframe')
      iframe.src = currentForm.src
      iframe.id = currentForm.id
      iframe.style.width = '100%'
      iframe.style.height = '100%'
      iframe.style.border = 'none'
      iframe.style.borderRadius = '3px'
      iframe.setAttribute('data-layout', "{'id':'INLINE'}")
      iframe.setAttribute('data-trigger-type', 'alwaysShow')
      iframe.setAttribute('data-trigger-value', '')
      iframe.setAttribute('data-activation-type', 'alwaysActivated')
      iframe.setAttribute('data-activation-value', '')
      iframe.setAttribute('data-deactivation-type', 'neverDeactivate')
      iframe.setAttribute('data-deactivation-value', '')
      iframe.setAttribute('data-form-name', currentForm.formName)
      iframe.setAttribute('data-height', currentForm.height)
      iframe.setAttribute('data-layout-iframe-id', currentForm.id)
      iframe.setAttribute('data-form-id', currentForm.formId)
      iframe.title = currentForm.formName
      
      containerRef.current.appendChild(iframe)
    }
  }, [locale, currentForm])
  
  return (
    <>
      <h1 className="text-4xl font-bold text-slate-800 text-center mb-12">{t('form.title')}</h1>
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <div ref={containerRef} className="h-[600px] md:h-[680px]"></div>
        </CardContent>
      </Card>
    </>
  )
}
