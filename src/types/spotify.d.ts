declare module 'spotify-api' {
  export type SpotifyUser = {
    country: string,
    display_name: string,
    email: string,
    explicit_content: {
      filter_enabled: boolean,
      filter_locked: boolean
    },
    external_urls: {
      spotify: string
    },
    followers: {
      href: string,
      total: number
    },
    href: string,
    id: string,
    images: {
      url: string,
      height: number,
      width: number
    }[],
    product: string,
    type: string,
    uri: string
  }

  export type SpotifyPlaylistListItem = {
    collaborative: boolean,
    description: string,
    external_urls: {
      spotify: string
    },
    href: string,
    id: string,
    images: {
      url: string,
      height: number,
      width: number
    }[],
    name: string,
    owner: {
      external_urls: {
        spotify: string
      },
      followers: {
        href: string,
        total: number
      },
      href: string,
      id: string,
      type: string,
      uri: string,
      display_name: string
    },
    public: boolean,
    snapshot_id: string,
    tracks: {
      href: string,
      total: number
    },
    type: string,
    uri: string
  }

  export type SpotifyCurrentUserPlaylists = {
    href: string,
    limit: number,
    next: string | null,
    offset: number,
    previous: string | null,
    total: number,
    items: SpotifyPlaylistListItem[]
  }

  export type SpotifyPlaybackState = {
    device: {
      id: string,
      is_active: boolean,
      is_private_session: boolean,
      is_restricted: boolean,
      name: string,
      type: string,
      volume_percent: number,
      supports_volume: boolean
    },
    repeat_state: string,
    shuffle_state: boolean,
    context: {
      type: string,
      href: string,
      external_urls: {
        spotify: string
      },
      uri: string
    },
    timestamp: number,
    progress_ms: number,
    is_playing: boolean,
    item: {
      album: {
        album_type: string,
        total_tracks: number,
        available_markets: string[],
        external_urls: {
          spotify: string
        },
        href: string,
        id: string,
        images: {
          url: string,
          height: number,
          width: number
        }[],
        name: string,
        release_date: string,
        release_date_precision: string,
        restrictions: {
          reason: string
        },
        type: string,
        uri: string,
        artists: {
          external_urls: {
            spotify: string
          },
          href: string,
          id: string,
          name: string,
          type: string,
          uri: string
        }[]
      },
      artists: {
        external_urls: {
          spotify: string
        },
        href: string,
        id: string,
        name: string,
        type: artist,
        uri: string
      }[],
      available_markets: string[],
      disc_number: number,
      duration_ms: number,
      explicit: boolean,
      external_ids: {
        isrc: string,
        ean: string,
        upc: string
      },
      external_urls: {
        spotify: string
      },
      href: string,
      id: string,
      is_playable: boolean,
      linked_from: {
      },
      restrictions: {
        reason: string
      },
      name: string,
      popularity: number,
      preview_url: string,
      track_number: number,
      type: track,
      uri: string,
      is_local: boolean
    },
    currently_playing_type: string,
    actions: {
      interrupting_playback: boolean,
      pausing: boolean,
      resuming: boolean,
      seeking: boolean,
      skipping_next: boolean,
      skipping_prev: boolean,
      toggling_repeat_context: boolean,
      toggling_shuffle: boolean,
      toggling_repeat_track: boolean,
      transferring_playback: boolean
    }
  }
}