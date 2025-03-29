import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') || 
    pathname.includes('.') ||
    pathname === '/'
  ) {
    return NextResponse.next()
  }
  
  if ((pathname === '/es' || pathname === '/pt') && !pathname.endsWith('/')) {
    const url = request.nextUrl.clone()
    url.pathname = `${pathname}/`
    return NextResponse.redirect(url)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next|.*\\.[^/]*$).*)'
  ],
}
