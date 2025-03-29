import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale || 'en';
  
  try {
    return {
      messages: (await import(`../messages/${safeLocale}.json`)).default
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${safeLocale}`, error);
    return {
      messages: (await import('../messages/en.json')).default
    };
  }
});
