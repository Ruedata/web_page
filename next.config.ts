import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';


const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      // {
      //   source: '/:locale/about/',
      //   destination: '/:locale/',
      //   permanent: true,
      // },
      {
        source: '/:locale/contact/',
        destination: '/:locale/',
        permanent: true,
      },
      {
        source: '/:locale/blog',
        destination: '/:locale/',
        permanent: true,
      },
      {
        source: '/:locale/get-started',
        destination: '/:locale/demo',
        permanent: true,
      }
    ]
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
