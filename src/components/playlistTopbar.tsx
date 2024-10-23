import PlayIcon from './icons/play'
import PlusIcon from './icons/plus'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface Props {
  hidePlaylistOptions?: boolean
}

export default function PlaylistTopbar({ hidePlaylistOptions }: Props) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-5">
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white dark:text-black max-md:h-11 max-md:w-11">
          <PlayIcon />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <span>list</span>
    </div>
  )
}
