interface Props {
  active?: boolean
}

export default function NoteIcon({ active = false }: Props) {
  return (
    <svg
      data-encore-id="icon"
      role="img"
      aria-hidden="true"
      data-testid="playlist"
      className="h-full w-full"
      viewBox="0 0 24 24"
    >
      <path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path>
    </svg>
  )
}
