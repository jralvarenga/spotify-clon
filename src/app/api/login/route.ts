import { generateRandomString } from "@/helpers/generateRandomString"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { NextResponse } from "next/server"
import queryString from 'query-string'

export function GET() {
  const scope = 'user-read-private user-read-email'
  const state = generateRandomString(16)
  cookies().set(process.env.SPOTIFY_STATE_KEY_NAME, state)

  return NextResponse.redirect('https://accounts.spotify.com/authorize?' + queryString.stringify({
    response_type: 'code',
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope: scope,
    redirect_uri: `${process.env.APP_URL}/api/callback`,
    state: state
  }))

}