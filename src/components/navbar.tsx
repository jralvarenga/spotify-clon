'use client'

import Link from "next/link";
import HomeIcon from "./icons/home";
import SearchIcon from "./icons/search";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname()

  const NAVBAR_ITEMS = [
    {
      title: 'Home',
      href: '/',
      icon: <HomeIcon active={pathname === '/'} />
    },
    {
      title: 'Search',
      href: '/search',
      icon: <SearchIcon active={pathname === '/search'} />
    }
  ]

  return (
    <ul className="px-3 py-2">
      {NAVBAR_ITEMS.map((item) => (
        <Link href={item.href} key={`navbar_item_${item.href}`}>
          <li
            style={{
              color: pathname === item.href ? 'var(--text-foreground' : ''
            }}
            className="h-10 w-full flex items-center gap-5 py-6 px-3 text-card-foreground hover:text-foreground duration-150"
          >
            {item.icon}
            <h3 className="font-bold">{item.title}</h3>
          </li>
        </Link>
      ))}
    </ul>
  )
}