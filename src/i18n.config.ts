import { getRequestConfig } from 'next-intl/server';
import type { RequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const messages = (await import(`./messages/${locale}.json`)).default;
  
  return {
    messages
  } as RequestConfig;
});
