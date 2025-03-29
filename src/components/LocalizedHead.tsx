"use client"

import { useLanguage } from "./Language-provider"
import { translations } from "../data/l10n"
import { useEffect } from "react"

export default function LocalizedHead() {
  const { language } = useLanguage()
  
  useEffect(() => {
    const title = translations[language]["hero.title"] || "Ruedata - Tire Management with AI"
    document.title = title
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        translations[language]["hero.subtitle"] || "Software that saves up to 30% on tire expenses while improving fleet safety and sustainability"
      )
    }
    
    document.documentElement.lang = language
  }, [language])
  
  return null
}
