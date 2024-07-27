import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

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
      <body className={cn("spotify-font dark", spotifyFont.variable)}>{children}</body>
    </html>
  );
}
