'use client'

import { useRouter } from 'next/navigation'
import ArrowLeftIcon from './icons/arrowLeft'
import ArrowRightIcon from './icons/arrowRight'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { SpotifyUser } from 'spotify-api'

interface Props {
  user: SpotifyUser | null
}

export default function Topbar({ user }: Props) {
  const router = useRouter()

  const NAV_BUTTONS = [
    {
      label: 'back',
      icon: <ArrowLeftIcon />,
      action: () => router.back(),
    },
    {
      label: 'foward',
      icon: <ArrowRightIcon />,
      action: () => router.forward(),
    },
  ]

  return (
    <div className="flex w-full items-center justify-between px-2">
      <div className="flex gap-2">
        {NAV_BUTTONS.map((item) => (
          <button
            onClick={item.action}
            key={`nav_button_${item.label}`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-card-foreground duration-150 hover:text-foreground"
          >
            {item.icon}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={user.images[0].url} />
                <AvatarFallback>{user.display_name}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href={'/api/logout'}>
                <DropdownMenuItem>
                  <button>Log out</button>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href={'/api/login'}>
            <button className="white-button px-7 text-sm">Log in</button>
          </Link>
        )}
      </div>
    </div>
  )
}
