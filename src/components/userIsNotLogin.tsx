import Link from 'next/link'

export default function UserIsNotLogin() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <h1 className="text-5xl font-bold">Oh no!!😭</h1>
      <p>
        You haven't log in into Spotify, if you want to use this app you need to
        log in with Spotify here
      </p>
      <Link href={'/api/login'}>
        <button className="white-button p-3 px-9 text-lg">Log in</button>
      </Link>
    </div>
  )
}
