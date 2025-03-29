"use client";

import React, { createContext, useContext, useCallback } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

type Language = "en" | "es" | "pt";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const _LANGUAGE_PATHS: Record<Language, string> = {
  en: "/",
  es: "/es",
  pt: "/pt",
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale() as Language;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();
  
  const handleSetLanguage = useCallback((lang: Language) => {
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1); // 1 year
    document.cookie = `preferredLanguage=${lang}; expires=${expirationDate.toUTCString()}; path=/; SameSite=Lax`;
    
    let newPath = '';
    const currentLocale = locale;
    
    let pathWithoutLocale = pathname;
    if (currentLocale !== 'en' && pathname.startsWith(`/${currentLocale}`)) {
      pathWithoutLocale = pathname.substring(currentLocale.length + 1) || '/';
    }
    
    if (lang === 'en') {
      newPath = pathWithoutLocale === '/' ? '/' : pathWithoutLocale;
    } else {
      newPath = `/${lang}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    }
    
    router.push(newPath);
  }, [locale, pathname, router]);
  
  const translateKey = (key: string): string => {
    try {
      key.split('.');
      return t(key);
    } catch (_) {
      console.error(`Translation key not found: ${key}`);
      return key;
    }
  };
  
  return (
    <LanguageContext.Provider value={{ 
      language: locale, 
      setLanguage: handleSetLanguage, 
      t: translateKey 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
