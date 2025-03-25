"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Language = "en" | "es" | "pt"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Dictionary of translations
const translations = {
  en: {
    "nav.solutions": "Solutions",
    "nav.about": "About us",
    "nav.case-studies": "Case Studies",
    "nav.login": "LOGIN",
    "nav.get-started": "Get Started",
    "hero.title": "Digitalize and optimize tire management with AI",
    "hero.subtitle": "Software that saves up to 30% on tire expenses while improving fleet safety and sustainability",
    "solution.title": "Solution for Transportation fleets",
    "footer.rights": "All rights reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "features.title": "Solution for Transportation fleets",
    "features.content": "Our goal is to transform the transportation industry by reducing tire consumption and maximizing the profitability of your fleet's operating expenses.",
    "features.maintenanceTeam": "Maintenance Team",
    "features.maintenanceTeamParagraph": "Minimize field downtime and optimize planning time",
    "features.procurement": "Procurement",
    "features.procurementParagraph": "Tire purchase based on real performance data",
    "features.fleetManager": "Fleet Manager",
    "features.fleetManagerParagraph": "Track key metrics and make data-driven decisions",
    "trustedBy.title": "Trusted by",
  },
  es: {
    "nav.solutions": "Soluciones",
    "nav.about": "Sobre nosotros",
    "nav.case-studies": "Casos de éxito",
    "nav.login": "INICIAR SESIÓN",
    "nav.get-started": "Comenzar",
    "hero.title": "Digitalice y optimice la gestión de neumáticos con IA",
    "hero.subtitle":
      "Software que ahorra hasta un 30% en gastos de neumáticos mientras mejora la seguridad y sostenibilidad de la flota",
    "solution.title": "Solución para flotas de transporte",
    "footer.rights": "Todos los derechos reservados",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
  },
  pt: {
    "nav.solutions": "Soluções",
    "nav.about": "Sobre nós",
    "nav.case-studies": "Estudos de caso",
    "nav.login": "ENTRAR",
    "nav.get-started": "Começar",
    "hero.title": "Digitalize e otimize a gestão de pneus com IA",
    "hero.subtitle":
      "Software que economiza até 30% em despesas com pneus enquanto melhora a segurança e sustentabilidade da frota",
    "solution.title": "Solução para frotas de transporte",
    "footer.rights": "Todos os direitos reservados",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Serviço",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Detect browser language on client side
  useEffect(() => {
    const browserLang = navigator.language.split("-")[0] as Language
    if (["en", "es", "pt"].includes(browserLang)) {
      setLanguage(browserLang)
    }
  }, [])

  // Translation function
  const t = (key: string) => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

