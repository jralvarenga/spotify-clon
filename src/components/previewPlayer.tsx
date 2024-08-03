import Link from 'next/link'

export default function PreviewPlayer() {
  return (
    <div className="flex h-full w-full items-center rounded-xl bg-gradient-to-r from-[#af2896] to-[#509bf5] px-5 text-white">
      <div className="flex h-full flex-1 flex-col justify-center">
        <h6 className="font-bold">Small preview</h6>
        <p className="text-sm">
          Sign in to start using this kind of alternative of Spotify
        </p>
      </div>

      <div>
        <Link href={'/api/login'}>
          <button className="white-button bg-white px-8 text-black">
            Log in
          </button>
        </Link>
      </div>
    </div>
  )
}
