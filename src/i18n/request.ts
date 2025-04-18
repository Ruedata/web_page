import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from './routing';
import { cookies } from 'next/headers'

export default getRequestConfig(async ({ requestLocale }) => {

  const requested = await requestLocale
  const cookieStore = await cookies();
  const preferredLanguage = cookieStore.get('preferredLanguage')?.value;

  const locale = preferredLanguage && hasLocale(routing.locales, preferredLanguage)
    ? preferredLanguage
    : hasLocale(routing.locales, requested)
      ? requested
      : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  }
})
