import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <h1 className="text-5xl font-bold">Oh no!!😭</h1>
      <p>
        You have enter a page that doesn't exist or is under development, try
        another time
      </p>
      <Link href={'/'}>
        <button className="white-button p-3 px-9 text-lg">Return</button>
      </Link>
    </div>
  )
}
