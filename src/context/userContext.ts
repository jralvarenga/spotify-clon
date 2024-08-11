import { createContext } from "react";
import { SpotifyUser } from "spotify-api"

const USER_CONTEXT_INITIAL_STATE = {
  user: null,
  logout: () => { }
}

export const UserContext = createContext<{
  user: SpotifyUser | null,
  logout: () => void
}>(USER_CONTEXT_INITIAL_STATE)