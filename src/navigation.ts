import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export { Link, useRouter, usePathname, useLocale, useTranslations };

export function redirect(path: string) {
  const router = useRouter();
  router.push(path);
  return null;
}
