'use client'

import { useState } from 'react'
import PlayIcon from './icons/play'
import RepeatIcon from './icons/repeat'
import RoundedPlusIcon from './icons/roundedPlus'
import SkipBackIcon from './icons/skipBack'
import SkipFowardIcon from './icons/skipFoward'
import SortIcon from './icons/sort'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import PauseIcon from './icons/pause'
import NowPlayingIcon from './icons/nowPlaying'
import LyricsIcon from './icons/lyrics'
import QueueIcon from './icons/queue'
import ConnectToADeviceIcon from './icons/connectToADevice'
import VolumeIcon from './icons/volume'
import MiniplayerIcon from './icons/miniplayer'
import FullScreenIcon from './icons/fullScreen'
import MutedIcon from './icons/muted'
import { Slider } from './ui/slider'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [muted, setMuted] = useState(false)

  const PLAYER_CONTROLLERS = [
    {
      icon: <SortIcon />,
      action: () => {},
      tooltip: 'Enable shuffle',
      isPlayPause: false,
      active: false,
    },
    {
      icon: <SkipBackIcon />,
      action: () => {},
      tooltip: 'Skip back',
      isPlayPause: false,
      active: false,
    },
    {
      icon: isPlaying ? <PauseIcon /> : <PlayIcon />,
      action: () => setIsPlaying(!isPlaying),
      tooltip: isPlaying ? 'Pause' : 'Play',
      isPlayPause: true,
      active: false,
    },
    {
      icon: <SkipFowardIcon />,
      action: () => {},
      tooltip: 'Skip foward',
      isPlayPause: false,
      active: false,
    },
    {
      icon: <RepeatIcon />,
      action: () => {},
      tooltip: 'Enable repeat',
      isPlayPause: false,
      active: false,
    },
  ]

  const PLAYER_BUTTONS = [
    {
      icon: <NowPlayingIcon />,
      action: () => {},
      tooltip: 'Now playing view (not working)',
      volumeController: false,
      active: false,
    },
    {
      icon: <LyricsIcon />,
      action: () => {},
      tooltip: 'Lyrics (not working)',
      volumeController: false,
      active: false,
    },
    {
      icon: <QueueIcon />,
      action: () => {},
      tooltip: 'Queue (not working)',
      volumeController: false,
      active: false,
    },
    {
      icon: <ConnectToADeviceIcon />,
      action: () => {},
      tooltip: 'Connect to a device (not working)',
      volumeController: false,
      active: false,
    },
    {
      icon: muted ? <MutedIcon /> : <VolumeIcon />,
      action: () => setMuted(!muted),
      tooltip: muted ? 'Unmute' : 'Mute',
      volumeController: true,
      active: false,
    },
    {
      icon: <MiniplayerIcon />,
      action: () => {},
      tooltip: 'Open miniplayer (not working)',
      volumeController: false,
      active: false,
    },
    {
      icon: <FullScreenIcon />,
      action: () => {},
      tooltip: 'Full screen (not working)',
      volumeController: false,
      active: false,
    },
  ]

  return (
    <div className="flex h-full w-full items-center justify-between">
      {/* song cover */}
      <div className="flex flex-1 gap-2">
        <div className="h-14 w-14 rounded-lg bg-slate-400"></div>
        <div className="relative flex h-14 w-fit flex-col justify-center bg-black">
          <h3 className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
            Song title
          </h3>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-card-foreground">
            Song artist
          </span>
          <div className="justify-centerce absolute -right-8 flex h-full items-center">
            <Tooltip>
              <TooltipTrigger className="text-card-foreground duration-150 hover:text-foreground">
                <div className="text-card-foreground hover:text-foreground">
                  <RoundedPlusIcon />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to liked songs</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* controllers */}
      <div className="flex w-2/4 max-w-2xl flex-col items-center justify-center gap-1 px-5">
        <div className="flex flex-nowrap items-center gap-4">
          {PLAYER_CONTROLLERS.map((button, i) => (
            <Tooltip key={`player_buttons_${i}`}>
              <TooltipTrigger
                onClick={button.action}
                className={
                  button.isPlayPause
                    ? 'flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background'
                    : 'flex h-8 w-8 items-center justify-center text-card-foreground duration-100 hover:text-foreground'
                }
              >
                {button.icon}
              </TooltipTrigger>
              <TooltipContent>
                <p>{button.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        <div className="flex w-full items-center justify-between gap-2">
          <h6 className="text-xs text-card-foreground">2:00</h6>
          <div className="flex-1">
            <Slider className="w-full" defaultValue={[33]} max={100} step={1} />
          </div>
          <h6 className="text-xs text-card-foreground">0:00</h6>
        </div>
      </div>

      {/* player settings */}
      <div className="flex flex-1 items-center justify-end">
        {PLAYER_BUTTONS.map((button, i) => (
          <Tooltip key={`player_buttons_${i}`}>
            <TooltipTrigger
              onClick={button.action}
              className="flex h-8 w-8 items-center justify-center text-card-foreground duration-100 hover:text-foreground"
            >
              {button.icon}
            </TooltipTrigger>
            {button.volumeController && (
              <div className="w-24">
                <Slider defaultValue={[33]} max={100} step={1} />
              </div>
            )}
            <TooltipContent>
              <p>{button.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
