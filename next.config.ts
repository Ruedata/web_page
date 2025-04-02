import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';


const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/about/',
        destination: '/',
        permanent: true, // Redirección permanente (código 308)
      },
      {
        source: '/contact/',
        destination: '/',
        permanent: true, // Redirección permanente (código 308)
      },
      {
        source: '/blog',
        destination: '/',
        permanent: true, // Redirección permanente (código 308)
      },
      // Puedes agregar más redirecciones aquí
    ]
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
