import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export { Link, useRouter, usePathname, useLocale, useTranslations };

export function redirect(path: string) {
  if (typeof window !== 'undefined') {
    window.location.href = path;
  }
  return null;
}
