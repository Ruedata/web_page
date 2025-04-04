import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';


const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
      source: '/:locale/about/',
      destination: '/:locale/',
      permanent: true,
      },
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
      },
      {
      source: '/:locale/8773163504.htm',
      destination: '/:locale/',
      permanent: true,
      },
      {
      source: '/:locale/53993220678.htm',
      destination: '/:locale/',
      permanent: true,
      },
      {
      source: '/:locale/84568287163.htm',
      destination: '/:locale/',
      permanent: true,
      },
      {
      source: '/:locale/53993171989.htm',
      destination: '/:locale/',
      permanent: true,
      },
      {
      source: '/:locale/71355232439.htm',
      destination: '/:locale/',
      permanent: true,
      },
      {
      source: '/:locale/84568231924.htm',
      destination: '/:locale/',
      permanent: true,
      },
      {
      source: '/:locale/84568166505.htm',
      destination: '/:locale/',
      permanent: true,
      },
      {
      source: '/:locale/79626259384.htm',
      destination: '/:locale/',
      permanent: true,
      },
      {
      source: '/:locale/93365214670.htm',
      destination: '/:locale/',
      permanent: true,
      },
      {
      source: '/:locale/71355155971.htm',
      destination: '/:locale/',
      permanent: true,
      }
    ]
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
