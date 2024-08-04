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
    public: false,
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
}