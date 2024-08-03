import dayjs from "dayjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import queryString from "query-string";

export async function GET() {
  const refresh_token = cookies().get('refresh_token')
  const buffer = Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')

  const response = await fetch('https://accounts.spotify.com/api/token', {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${buffer}`
    },
    method: 'post',
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token!.value
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