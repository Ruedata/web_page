import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const isAdminRoute = /\/[^/]+\/rue-admin(?:\/.*)?$/.test(pathname);
  
  if (isAdminRoute && !pathname.includes('/rue-admin/login')) {
    const session = request.cookies.get('admin_session');
    
    if (!session) {
      const locale = pathname.split('/')[1];
      const loginUrl = new URL(`/${locale}/rue-admin/login`, request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
