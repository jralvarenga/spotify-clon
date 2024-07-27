import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const spotifyFont = localFont({ src: '../assets/font/GothamMedium.ttf', variable: '--spotify-font' })

export const metadata: Metadata = {
  title: "Spotify",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("spotify-font dark", spotifyFont.variable)}>
        <div className="w-full h-screen spotify-grid">
          {/* left sidebar */}
          <div className="w-96 h-full p-2 pr-0" style={{ gridArea: 'left-sidebar' }}>
            <nav className="w-full h-full gap-2 flex flex-col">
              <div className="bg-card rounded-xl">
                <Navbar />
              </div>
              <div className="flex-1 bg-card p-2 rounded-xl">library</div>
            </nav>
          </div>

          {/* page */}
          <div className="p-2 rounded" style={{ gridArea: "main-view" }}>
            <main className="w-full h-full bg-card p-2 rounded-xl">
              {children}
            </main>
          </div>

          {/* player */}
          <div className="w-full min-h-20 p-2 pt-0" style={{ gridArea: 'now-playing-bar' }}>
            <footer className="w-full h-full">player</footer>
          </div>


        </div>
      </body>
    </html>
  );
}
