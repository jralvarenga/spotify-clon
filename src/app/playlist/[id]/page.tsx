import { getPlaylistInfo } from '@/actions/spotify'
import PlaylistHeader from '@/components/playlistHeader'
import { cookies } from 'next/headers'

export default async function PlaylistPage({
  params,
}: {
  params: { id: string }
}) {
  const accessToken = cookies().get('access_token')?.value
  const playlistInfo = await getPlaylistInfo({ accessToken, id: params.id })
  console.log(playlistInfo)

  return (
    <div className="relative flex h-full w-full flex-col">
      <PlaylistHeader
        authors={[playlistInfo?.owner]}
        cover={playlistInfo?.images[0].url || ''}
        description={playlistInfo?.description || ''}
        title={playlistInfo?.name || ''}
        type="Playlist"
      />
    </div>
  )
}