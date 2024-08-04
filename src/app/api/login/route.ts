import { SCOPES } from "@/constants/spotifyScopes"
import { generateRandomString } from "@/helpers/generateRandomString"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import queryString from 'query-string'

export function GET() {
  const state = generateRandomString(16)
  cookies().set(process.env.SPOTIFY_STATE_KEY_NAME, state)

  return NextResponse.redirect('https://accounts.spotify.com/authorize?' + queryString.stringify({
    response_type: 'code',
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope: SCOPES.join(' '),
    redirect_uri: `${process.env.APP_URL}/api/callback`,
    state: state
  }))

}