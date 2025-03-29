import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export const locales = ['en', 'es', 'pt'];
export const defaultLocale = 'en';

export { Link, useRouter, usePathname, useLocale, useTranslations };

export function getLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (locales.includes(firstSegment)) {
    return firstSegment;
  }
  
  return defaultLocale;
}
