import { SpotifyCurrentUserPlaylists, SpotifyCurrentUserSavedTracks, SpotifyPlaybackState, SpotifyUser } from "spotify-api"

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

    if (!res.ok) {
      return null
    }

    const data = await res.json()
    return data
  } catch (error) {
    return null
  }
}

export async function getCurrectUserLikedSongs({ accessToken }: SpotifyActionsProps): Promise<SpotifyCurrentUserSavedTracks | null> {
  if (!accessToken) {
    return null
  }

  try {
    const res = await fetch('https://api.spotify.com/v1/me/tracks', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })

    const dataxd = await res.json()
    console.log(dataxd);
    if (!res.ok) {
      return null
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.log('xd');

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

    if (!res.ok) {
      return null
    }

    const data = await res.json()
    return data
  } catch (error) {
    return null
  }
}

export async function getPlaylistInfo({ accessToken, id }: SpotifyActionsProps & { id: string }): Promise<SpotifyPlaylistInfo | null> {
  if (!accessToken) {
    return null
  }

  try {
    const res = await fetch(`https://api.spotify.com/v1/playlist/${id}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })

    if (!res.ok) {
      return null
    }

    const data = await res.json()
    return data
  } catch (error) {
    return null
  }
}


export async function getPlaybackState({ accessToken }: SpotifyActionsProps): Promise<SpotifyPlaybackState | '' | null> {
  if (!accessToken) {
    return null
  }

  try {
    const res = await fetch('https://api.spotify.com/v1/me/player', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })

    if (!res.ok) {
      return null
    }

    const textData = await res.text()

    if (textData !== '') {
      const data = JSON.parse(textData)

      return data
    }

    return null
  } catch (error) {
    return null
  }
}
