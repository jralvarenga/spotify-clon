import { getPlaylistInfo, getUserProfile } from '@/actions/spotify'
import PlaylistHeader from '@/components/playlistHeader'
import PlaylistTopbar from '@/components/playlistTopbar'
import { cookies } from 'next/headers'

export default async function PlaylistPage({
  params,
}: {
  params: { id: string }
}) {
  const accessToken = cookies().get('access_token')?.value
  const playlistInfo = await getPlaylistInfo({ accessToken, id: params.id })
  const owner = await getUserProfile({
    accessToken,
    id: playlistInfo!.owner.id,
  })

  return (
    <div className="relative flex h-full flex-col overflow-x-hidden">
      <PlaylistHeader
        author={owner!}
        cover={playlistInfo?.images[0].url || ''}
        description={playlistInfo?.description || ''}
        title={playlistInfo?.name || ''}
        type="Playlist"
      />

      {/* <PlaylistTopbar /> */}
    </div>
  )
}
