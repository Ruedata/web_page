import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/es',
        destination: '/',
      },
      {
        source: '/es/:path*',
        destination: '/:path*',
      },
      {
        source: '/pt',
        destination: '/',
      },
      {
        source: '/pt/:path*',
        destination: '/:path*',
      },
    ];
  },
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

export default nextConfig;
