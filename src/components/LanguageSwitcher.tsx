"use client"

import { ChangeEvent, useTransition } from 'react'
import { Locale } from 'next-intl'
import {usePathname, useRouter} from '@/i18n/navigation'
import {useParams} from 'next/navigation'
import { setCookie } from 'cookies-next';

export default function LanguageSwitcher({locale}: {locale: Locale}) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  function handleLanguageChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      setCookie('preferredLanguage', nextLocale, { maxAge: 365 * 24 * 60 * 60 });
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      )
    })
  }

  return (
    <div className="relative inline-block text-left">
      <select
        disabled={isPending}
        value={locale}
        onChange={handleLanguageChange}
        className="block appearance-none bg-transparent border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="pt">PT</option>
      </select>
    </div>
  );
}
