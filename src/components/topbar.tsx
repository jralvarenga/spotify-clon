'use client'

import { useRouter } from 'next/navigation'
import ArrowLeftIcon from './icons/arrowLeft'
import ArrowRightIcon from './icons/arrowRight'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function Topbar() {
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
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="rounded-xl">user menu</PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
