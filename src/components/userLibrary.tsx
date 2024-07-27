import LibraryIcon from './icons/library'
import NewFolterIcon from './icons/newFolder'
import NewPlaylistIcon from './icons/newPlaylist'
import PlusIcon from './icons/plus'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export default function UserLibrary() {
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
    <div className="px-3 py-2">
      {/* title */}
      <div className="flex items-center justify-between">
        <button className="flex w-full items-center gap-3 px-3 text-card-foreground duration-150 hover:text-foreground">
          <LibraryIcon />
          <h3 className="font-bold">Your Library</h3>
        </button>

        <Popover>
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
        </Popover>
      </div>
    </div>
  )
}
