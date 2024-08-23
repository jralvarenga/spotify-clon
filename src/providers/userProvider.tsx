'use client'

import { UserContext } from '@/context/userContext'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { SpotifyUser } from 'spotify-api'

interface Props {
  user: SpotifyUser | null
  children: ReactNode
}

export default function UserProvider({ children, user: fetchedUser }: Props) {
  const router = useRouter()
  const [user, setUser] = useState<SpotifyUser | null>(null)

  function logout() {
    setUser(null)
    router.push(`/api/logout`)
  }

  useEffect(() => {
    setUser(fetchedUser)
  }, [fetchedUser])

  const context = useMemo(
    () => ({
      user,
      logout,
    }),
    [user],
  )

  return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}
