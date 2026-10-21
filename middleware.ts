// middleware.ts (Place this at your project root, NOT in /app)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Protect the invoice generator route
  if (url.pathname.startsWith('/tools/invoice')) {
    const authCookie = req.cookies.get('oc_generator_auth');

    if (!authCookie || authCookie.value !== 'authenticated') {
      const loginUrl = new URL('/tools/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/tools/invoice', '/tools/invoice/:path*'],
};