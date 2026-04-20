import { NextResponse } from 'next/server';

export function middleware(request) {
  const adminSession = request.cookies.get('sounds-of-suds-admin-session')?.value;
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');
  const isLoginRoute = request.nextUrl.pathname.startsWith('/admin-login');

  if (isDashboardRoute && adminSession !== 'active') {
    return NextResponse.redirect(new URL('/admin-login', request.url));
  }

  if (isLoginRoute && adminSession === 'active') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin-login'],
};
