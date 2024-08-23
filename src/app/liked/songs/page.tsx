import { getCurrectUserLikedSongs } from '@/actions/spotify'
import PlaylistHeader from '@/components/playlistHeader'
import { cookies } from 'next/headers'

export default async function LikedSongsPage() {
  const accessToken = cookies().get('access_token')?.value
  const userLikedSongs = await getCurrectUserLikedSongs({ accessToken })

  return (
    <div className="relative flex h-full w-full flex-col">
      <PlaylistHeader
        authors={[
          {
            displayName: 'Rigo Alvarenga',
            picture: '/',
            url: '',
          },
        ]}
        cover="/img/liked-songs.png"
        description="Saved tracks by the user"
        title="Liked Songs"
        type="Playlist"
      />
    </div>
  )
}
