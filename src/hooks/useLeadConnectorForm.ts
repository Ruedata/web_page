"use client"

import { useEffect, useRef } from "react"
import { useLocale } from 'next-intl'
import { formConfig } from "@/data/forms/leadConnectorConfig"

export function useLeadConnectorForm() {
  const locale = useLocale() as 'en' | 'es' | 'pt'
  const containerRef = useRef<HTMLDivElement>(null)
  const currentForm = formConfig[locale]

  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')

    if (!existingScript) {
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
    }
  }, [])

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

  return {
    containerRef,
    currentForm
  }
}
