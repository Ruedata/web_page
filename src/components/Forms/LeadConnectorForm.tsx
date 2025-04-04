"use client"

import React from "react"
import { useTranslations } from 'next-intl'
import { Card, CardContent } from "@/components/ui/card"
import { useLeadConnectorForm } from "@/hooks/useLeadConnectorForm"

export default function LeadConnectorForm() {
  const t = useTranslations()
  const { containerRef } = useLeadConnectorForm()

  return (
    <>
      <h1 className="text-4xl font-bold text-slate-800 text-center mb-12">{t('form.title')}</h1>
      <Card>
        <CardContent className="p-6">
          <div ref={containerRef} className="h-auto"></div>
        </CardContent>
      </Card>
    </>
  )
}
