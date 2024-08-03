import dayjs from "dayjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import queryString from "query-string";

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const code = url.searchParams.get('code')
  const state = url.searchParams.get('state')
  const storedState = cookies().get(process.env.SPOTIFY_STATE_KEY_NAME)

  if (state === null || state !== storedState?.value) {
    redirect('/' + queryString.stringify({
      error: 'state_mismatch'
    }))
  } else {
    cookies().delete(process.env.SPOTIFY_STATE_KEY_NAME)
    const buffer = Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')

    const response = await fetch('https://accounts.spotify.com/api/token', {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${buffer}`
      },
      method: 'post',
      body: new URLSearchParams({
        'code': code!,
        'redirect_uri': `${process.env.APP_URL}/api/callback`,
        'grant_type': 'authorization_code'
      })
    })

    if (response.ok) {
      const body = await response.json()
      const access_token = body.access_token
      const refresh_token = body.refresh_token

      cookies().set('access_token', access_token)
      cookies().set('refresh_token', refresh_token)
      cookies().set('token_saved_at', dayjs().unix().toString())
      redirect('/')
    } else {
      redirect('/' + queryString.stringify({
        error: 'invalid_token'
      }))
    }
  }
}