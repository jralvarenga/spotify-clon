'use client'

interface Props {
  cover: string
  title: string
  type: string
  description: string
  author: SpotifyApi.UserProfileResponse
}

export default function PlaylistHeader({
  author,
  cover,
  description,
  title,
  type,
}: Props) {
  return (
    <header className="mt-5 flex flex-row gap-5 px-5">
      <picture className="aspect-square h-52 w-52 flex-none">
        <img
          src={cover}
          alt={`Cover of ${title}`}
          className="h-full w-full object-cover shadow-lg"
        />
      </picture>

      <div className="flex flex-col justify-between gap-3">
        <h2 className="flex flex-1 items-end text-sm text-card-foreground">
          {type}
        </h2>
        <div className="flex flex-col gap-3">
          <h1 className="block text-7xl font-bold">{title}</h1>
          <p className="text-sm font-normal text-card-foreground">
            {description}
          </p>
        </div>

        <div className="flex flex-1 items-end">
          <div className="text-sm font-normal text-gray-300">
            <div>
              <div className="flex items-center gap-3 text-sm">
                {' '}
                <h6 className="flex items-center gap-2">
                  {' '}
                  <img
                    src={author.images![0].url}
                    className="h-6 w-6 rounded-full"
                    alt={`playlist_author_prof_pic_${author.display_name}`}
                  />
                  <span className="font-bold">{author.display_name}</span>
                </h6>
                <h6 className="text-card-foreground">76 songs</h6>
                <h6 className="text-card-foreground">About 3h 45min</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
