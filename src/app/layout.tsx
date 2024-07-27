import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/navbar'
import UserLibrary from '@/components/userLibrary'
import { TooltipProvider } from '@/components/ui/tooltip'
import Topbar from '@/components/topbar'

const spotifyFont = localFont({
  src: '../assets/font/GothamMedium.ttf',
  variable: '--spotify-font',
})

export const metadata: Metadata = {
  title: 'Spotify',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <TooltipProvider>
        <body className={cn('spotify-font dark', spotifyFont.variable)}>
          <div className="spotify-grid h-screen w-full">
            {/* left sidebar */}
            <div
              className="h-full w-96 p-2 pr-0"
              style={{ gridArea: 'left-sidebar' }}
            >
              <nav className="flex h-full w-full flex-col gap-2">
                <div className="rounded-xl bg-card">
                  <Navbar />
                </div>
                <div className="flex-1 rounded-xl bg-card p-2">
                  <UserLibrary />
                </div>
              </nav>
            </div>

            {/* page */}
            <div
              className="flex flex-col gap-2 rounded p-2"
              style={{ gridArea: 'main-view' }}
            >
              <nav className="w-full">
                <Topbar />
              </nav>
              <main className="h-full w-full rounded-xl bg-card p-2">
                {children}
              </main>
            </div>

            {/* player */}
            <div
              className="min-h-20 w-full p-2 pt-0"
              style={{ gridArea: 'now-playing-bar' }}
            >
              <footer className="h-full w-full">player</footer>
            </div>
          </div>
        </body>
      </TooltipProvider>
    </html>
  )
}
