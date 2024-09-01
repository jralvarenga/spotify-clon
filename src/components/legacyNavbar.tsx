'use client'

import Link from 'next/link'
import HomeIcon from './icons/home'
import SearchIcon from './icons/search'
import { usePathname } from 'next/navigation'
import SpotifyLogoBrandIcon from './icons/spotifyLogoBrand'

export default function LegacyNavbar() {
  const pathname = usePathname()

  const NAVBAR_ITEMS = [
    {
      title: 'Home',
      href: '/',
      icon: <HomeIcon active={pathname === '/'} />,
    },
    {
      title: 'Search',
      href: '/search',
      icon: <SearchIcon active={pathname === '/search'} />,
    },
  ]

  return (
    <>
      <div className="px-6 pt-4">
        <SpotifyLogoBrandIcon />
      </div>
      <ul className="px-3 py-2">
        {NAVBAR_ITEMS.map((item) => (
          <Link href={item.href} key={`navbar_item_${item.href}`}>
            <li
              style={{
                color: pathname === item.href ? 'var(--text-foreground' : '',
              }}
              className="flex h-10 w-full items-center gap-5 px-3 py-6 text-card-foreground duration-150 hover:text-foreground"
            >
              {item.icon}
              <h3 className="font-bold">{item.title}</h3>
            </li>
          </Link>
        ))}
      </ul>
    </>
  )
}
