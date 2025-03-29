"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { translations } from "@/data/l10n"

type Language = "en" | "es" | "pt"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const LANGUAGE_PATHS: Record<Language, string> = {
  en: "/",
  es: "/es/",
  pt: "/pt/",
}

const ensureTrailingSlash = (path: string): string => {
  if (path === '/') return path
  return path.endsWith('/') ? path : `${path}/`
}

const isLanguageRootPath = (path: string): boolean => {
  const normalizedPath = path.endsWith('/') ? path : `${path}/`
  return normalizedPath === '/' || 
         normalizedPath === '/es/' || 
         normalizedPath === '/pt/'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient) {
      const savedLanguage = localStorage.getItem("preferredLanguage") as Language | null
      if (savedLanguage && ["en", "es", "pt"].includes(savedLanguage)) {
        setLanguage(savedLanguage)
      }
    }
  }, [isClient])

  useEffect(() => {
    if (isClient) {
      const currentPath = window.location.pathname
      const pathWithTrailingSlash = ensureTrailingSlash(currentPath)
      
      const savedLanguage = localStorage.getItem("preferredLanguage") as Language | null
      
      if (savedLanguage && ["en", "es", "pt"].includes(savedLanguage)) {
        const expectedPath = LANGUAGE_PATHS[savedLanguage]
        
        if (isLanguageRootPath(currentPath) && pathWithTrailingSlash !== expectedPath) {
          window.location.href = expectedPath
        }
      } else {
        const browserLang = navigator.language.split("-")[0] as Language
        
        if (["en", "es", "pt"].includes(browserLang)) {
          setLanguage(browserLang)
          localStorage.setItem("preferredLanguage", browserLang)
          
          const expectedPath = LANGUAGE_PATHS[browserLang]
          
          if (isLanguageRootPath(currentPath) && pathWithTrailingSlash !== expectedPath) {
            window.location.href = expectedPath
          }
        } else {
          setLanguage("en")
          localStorage.setItem("preferredLanguage", "en")
          
          if (pathWithTrailingSlash === '/es/' || pathWithTrailingSlash === '/pt/') {
            window.location.href = "/"
          }
        }
      }
    }
  }, [isClient])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (isClient) {
      localStorage.setItem("preferredLanguage", lang)
      
      const currentPath = window.location.pathname
      const pathWithTrailingSlash = ensureTrailingSlash(currentPath)
      
      const expectedPath = LANGUAGE_PATHS[lang]
      
      if (isLanguageRootPath(currentPath) && pathWithTrailingSlash !== expectedPath) {
        window.location.href = expectedPath
      }
    }
  }

  // Translation function
  const t = (key: string) => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

