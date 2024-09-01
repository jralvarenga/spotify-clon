'use client'

import useUser from '@/hooks/useUser'
import SpotifyLogoIcon from './icons/spotifyLogo'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'
import HomeIcon from './icons/home'
import SearchIcon from './icons/search'
import { Input } from './ui/input'
import BrowseIcon from './icons/browse'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useUser()

  return (
    <div className="flex w-full items-center justify-between px-3">
      <div>
        <SpotifyLogoIcon />
      </div>
      <div className="flex w-1/2 min-w-[350px] max-w-[546px] items-center gap-2">
        <Link href="/">
          <button
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-card text-card-foreground duration-150 hover:text-foreground"
            style={{
              color:
                pathname === '/'
                  ? 'var(--foreground)'
                  : 'var(--card-foreground)',
            }}
          >
            <HomeIcon active={pathname === '/'} />
          </button>
        </Link>
        <form
          className="relative flex h-12 flex-1 items-center"
          onFocus={() => {
            router.push('search')
          }}
        >
          <div
            className="absolute flex h-12 w-12 items-center justify-center text-card-foreground duration-150 hover:text-foreground"
            style={{
              color:
                pathname === '/search'
                  ? 'var(--foreground)'
                  : 'var(--card-foreground)',
            }}
          >
            <SearchIcon active={pathname === '/search'} />
          </div>
          <Input
            className="h-12 flex-1 rounded-full border-none bg-card pl-12"
            placeholder="What do you want to play?"
          />
          <button
            className="absolute right-0 flex h-12 w-12 items-center justify-center text-card-foreground duration-150 hover:text-foreground"
            style={{
              color:
                pathname === '/search'
                  ? 'var(--foreground)'
                  : 'var(--card-foreground)',
            }}
          >
            <BrowseIcon active={pathname === '/search'} />
          </button>
        </form>
      </div>
      <div className="flex h-full items-center justify-center">
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
              <DropdownMenuItem>
                <button onClick={logout}>Log out</button>
              </DropdownMenuItem>
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
