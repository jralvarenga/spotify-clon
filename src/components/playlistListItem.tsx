import { SpotifyPlaylistListItem } from 'spotify-api'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import EmptyCover from './emptyCover'

interface Props {
  playlist: SpotifyPlaylistListItem
  disableHoverCard?: boolean
}

export default function PlaylistListItem({
  playlist,
  disableHoverCard,
}: Props) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex w-full cursor-pointer items-center gap-3 overflow-hidden rounded-lg p-2 duration-150 hover:bg-muted">
          {playlist.images && playlist.images.length > 0 ? (
            <img
              src={playlist.images[0].url}
              className="h-12 w-12 rounded-lg"
            />
          ) : (
            <div className="h-12 w-12 rounded-lg">
              <EmptyCover />
            </div>
          )}
          <div className="flex h-12 flex-1 flex-col">
            <h3 className="font-bold">{playlist.name}</h3>
            <div className="flex items-center text-sm capitalize text-muted-foreground">
              {playlist.type} • {playlist.owner.display_name}
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-80"
        style={disableHoverCard ? { display: 'none' } : {}}
      >
        <div className="flex justify-between space-x-4">
          <Avatar>
            {playlist.images && playlist.images.length > 0 ? (
              <AvatarImage src={playlist.images[0].url} />
            ) : (
              <AvatarImage src={''} />
            )}
            <AvatarFallback>{playlist.name}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">
              By {playlist.owner.display_name}
            </h4>
            <p className="text-sm">{playlist.description}</p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                Is {playlist.public ? 'Public' : 'Private'}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
