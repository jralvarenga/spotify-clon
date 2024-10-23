import NoPlaylists from './noPlaylists'
import LibraryIcon from './icons/library'
import NewFolterIcon from './icons/newFolder'
import NewPlaylistIcon from './icons/newPlaylist'
import PlusIcon from './icons/plus'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import BrowsePodcast from './browsePodcasts'
import Link from 'next/link'
import PlaylistListItem from './playlistListItem'

interface Props {
  showLikedSongs: boolean
  playlists: SpotifyApi.ListOfCurrentUsersPlaylistsResponse | null
}

export default async function UserLibrary({
  playlists,
  showLikedSongs,
}: Props) {
  const NEW_OPTIONS = [
    {
      title: 'Create Playlist',
      icon: <NewPlaylistIcon />,
      action: () => {},
    },
    {
      title: 'Create Folder',
      icon: <NewFolterIcon />,
      action: () => {},
    },
  ]

  return (
    <div className="flex flex-col gap-5 py-2">
      {/* title */}
      <div className="flex items-center justify-between px-3">
        <button className="flex w-full items-center gap-3 px-3 text-card-foreground duration-150 hover:text-foreground">
          <LibraryIcon />
          <h3 className="font-bold">Your Library</h3>
        </button>

        <Popover>
          <PopoverTrigger className="text-card-foreground duration-150 hover:text-foreground">
            <PlusIcon />
          </PopoverTrigger>
          <PopoverContent className="flex w-auto flex-col rounded-xl">
            <ul>
              {NEW_OPTIONS.map((item) => (
                <li
                  className="my-3 first:mt-0 last:mb-0"
                  key={`create_item_${item.title}`}
                >
                  <button
                    // onClick={item.action}
                    className="flex h-full w-full items-center gap-2 text-card-foreground duration-150 hover:text-foreground"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>

        {/* <Popover>
          <PopoverTrigger>
            <Tooltip>
              <TooltipTrigger className="text-card-foreground duration-150 hover:text-foreground">
                <PlusIcon />
              </TooltipTrigger>
              <TooltipContent>
                <p>Create playlist or folder</p>
              </TooltipContent>
            </Tooltip>
          </PopoverTrigger>
          <PopoverContent className="flex w-auto flex-col rounded-xl">
            <ul>
              {NEW_OPTIONS.map((item) => (
                <li
                  className="my-3 first:mt-0 last:mb-0"
                  key={`create_item_${item.title}`}
                >
                  <button
                    // onClick={item.action}
                    className="flex h-full w-full items-center gap-2 text-card-foreground duration-150 hover:text-foreground"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover> */}
      </div>

      {/* playlists */}
      <div className="flex h-[calc(100vh_-_250px)] flex-col gap-1 overflow-y-auto">
        {showLikedSongs && (
          <Link href={`/liked/songs`}>
            <PlaylistListItem
              disableHoverCard
              playlist={{
                collaborative: false,
                description: 'Liked songs by the user',
                external_urls: {
                  spotify: '',
                },
                href: '',
                id: '',
                images: [{ height: 0, url: '/img/liked-songs.png', width: 0 }],
                name: 'Liked Songs',
                owner: {
                  display_name: 'user',
                  external_urls: {
                    spotify: '',
                  },
                  followers: {
                    href: null,
                    total: 0,
                  },
                  href: '',
                  id: '',
                  type: 'user',
                  uri: '',
                },
                public: false,
                snapshot_id: '',
                tracks: {
                  href: '',
                  total: 0,
                },
                type: 'playlist',
                uri: '',
              }}
            />
          </Link>
        )}
        {!playlists ? (
          <>
            <NoPlaylists />
            <BrowsePodcast />
          </>
        ) : (
          playlists.items.map((playlist) => (
            <Link
              href={`/playlist/${playlist.id}`}
              key={`user_playlist_${playlist.id}`}
            >
              <PlaylistListItem playlist={playlist} />
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
