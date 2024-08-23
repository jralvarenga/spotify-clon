'use client'

interface Props {
  cover: string
  title: string
  type: string
  description: string
  authors: {
    displayName: string
    url: string
    picture: string
  }[]
}

export default function PlaylistHeader({
  authors,
  cover,
  description,
  title,
  type,
}: Props) {
  return (
    <div className="flex h-52 w-full items-end gap-3 p-5">
      <div className="flex-shrink-0">
        <img
          src={cover}
          alt={`playlist_cover_${cover}`}
          className="h-36 w-36 flex-shrink-0 rounded-xl"
        />
      </div>
      <div className="flex h-full flex-col justify-between">
        <h6 className="text-xs">{type}</h6>
        <h2 className="text-6xl font-bold">{title}</h2>
        <div>
          <p className="text-xs text-card-foreground">{description}</p>
          <h6>Author</h6>
        </div>
      </div>
    </div>
  )
}
