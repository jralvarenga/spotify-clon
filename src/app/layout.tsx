import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { cn } from '@/lib/utils'
import UserLibrary from '@/components/userLibrary'
import { TooltipProvider } from '@/components/ui/tooltip'
import PreviewPlayer from '@/components/previewPlayer'
import { getCurrentUserInfo, getCurrentUserPlaylists } from '@/actions/spotify'
import { cookies } from 'next/headers'
import MusicPlayer from '@/components/musicPlayer'
import UserProvider from '@/providers/userProvider'
import Navbar from '@/components/navbar'

const spotifyFont = localFont({
  src: '../assets/font/SpotifyMixUITitle.woff2',
  variable: '--spotify-font',
})

export const metadata: Metadata = {
  title: 'Spotify',
  description: '',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const accessToken = cookies().get('access_token')?.value
  const user = await getCurrentUserInfo({ accessToken })
  const playlists = await getCurrentUserPlaylists({ accessToken })

  return (
    <html lang="en">
      <TooltipProvider>
        <UserProvider user={user}>
          <body className={cn('spotify-font dark', spotifyFont.variable)}>
            <div className="spotify-grid h-screen w-screen">
              {/* topbar */}
              <div className="w-full p-2" style={{ gridArea: 'topbar' }}>
                <nav className="w-full">
                  <Navbar />
                </nav>
              </div>

              {/* left sidebar */}
              <div
                className="h-full w-96 p-2 pr-0"
                style={{ gridArea: 'left-sidebar' }}
              >
                <nav className="flex w-full flex-col gap-2">
                  <div className="h-full flex-1 rounded-xl bg-card p-2">
                    <UserLibrary
                      showLikedSongs={!!user}
                      playlists={playlists}
                    />
                  </div>
                </nav>
              </div>

              {/* page */}
              <div
                className="flex flex-col gap-2 rounded p-2"
                style={{ gridArea: 'main-view' }}
              >
                <main className="h-full w-full rounded-xl bg-card p-2">
                  {children}
                </main>
              </div>

              {/* player */}
              <div
                className="h-20 w-full p-2 pt-0"
                style={{ gridArea: 'now-playing-bar' }}
              >
                <footer className="h-full w-full">
                  {accessToken ? <MusicPlayer /> : <PreviewPlayer />}
                </footer>
              </div>
            </div>
          </body>
        </UserProvider>
      </TooltipProvider>
    </html>
  )
}
