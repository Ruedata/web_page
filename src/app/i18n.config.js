import { createConfig } from 'next-intl';
 
export default createConfig({
  locales: ['en', 'es', 'pt'],
  defaultLocale: 'en',
  localeDetection: true
});
