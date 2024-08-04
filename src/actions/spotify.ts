import { SpotifyCurrentUserPlaylists, SpotifyUser } from "spotify-api"

type SpotifyActionsProps = {
  accessToken: string | null | undefined
}

export async function getCurrentUserInfo({ accessToken }: SpotifyActionsProps): Promise<SpotifyUser | null> {
  if (!accessToken) {
    return null
  }

  try {
    const res = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    const data = await res.json()
    return data
  } catch (error) {
    return null
  }
}

export async function getCurrentUserPlaylists({ accessToken }: SpotifyActionsProps): Promise<SpotifyCurrentUserPlaylists | null> {
  if (!accessToken) {
    return null
  }

  try {
    const res = await fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    const data = await res.json()
    return data
  } catch (error) {
    return null
  }
}

