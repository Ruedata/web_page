"use client"

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { setCookie } from 'cookies-next';
import { locales } from '@/i18n';

export default function LanguageSwitcher() {
  const t = useTranslations();
  const [selectedLocale, setSelectedLocale] = useState('en');

  useEffect(() => {
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const localeFromPath = pathSegments[0];
    
    if (localeFromPath && ['en', 'es', 'pt'].includes(localeFromPath)) {
      setSelectedLocale(localeFromPath);
    } else {
      setSelectedLocale('en');
    }
  }, []);

  const handleLanguageChange = (locale: string) => {
    setCookie('preferredLanguage', locale, { maxAge: 365 * 24 * 60 * 60 });
    
    const currentPath = window.location.pathname;
    let newPath;
    
    if (locale === 'en') {
      newPath = currentPath.replace(/^\/(en|es|pt)/, '') || '/';
    } else {
      const pathWithoutLocale = currentPath.replace(/^\/(en|es|pt)/, '');
      newPath = `/${locale}${pathWithoutLocale}`;
    }
    
    window.location.href = newPath;
  };

  return (
    <div className="relative inline-block text-left">
      <select
        value={selectedLocale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="block appearance-none bg-transparent border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="pt">PT</option>
      </select>
    </div>
  );
}
