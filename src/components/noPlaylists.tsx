export default function NoPlaylists() {
  return (
    <div className="flex w-full flex-col gap-3 rounded-xl bg-muted p-3">
      <h3 className="font-bold">Create your first playlist</h3>
      <p className="text-xs text-card-foreground">
        If Spotify can do, so can I
      </p>
      <button className="white-button text-sm">Create Playlist</button>
    </div>
  )
}
