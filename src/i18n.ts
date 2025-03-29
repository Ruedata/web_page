import { notFound } from 'next/navigation';

export const locales = ['en', 'es', 'pt'];
export const defaultLocale = 'en';

export async function getMessages(locale: string) {
  try {
    return (await import(`./messages/${locale}.json`)).default;
  } catch (_) {
    notFound();
  }
}
