import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { accessTokenIsExpired } from './helpers/accessTokenIsExpired'

export function middleware(request: NextRequest) {
  const accessToken = cookies().get('access_token')
  const refreshToken = cookies().get('refresh_token')
  const tokenSavedAt = cookies().get('token_saved_at')

  if (!accessToken?.value || !refreshToken?.value) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  const isExpired = accessTokenIsExpired(tokenSavedAt!.value)

  if (isExpired) {
    return NextResponse.redirect(new URL('/api/refresh-token', request.url))
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login
     * - api
     */
    "/((?!api|_next/static|_next/image|favicon.ico|login/api).*)"
  ],
}