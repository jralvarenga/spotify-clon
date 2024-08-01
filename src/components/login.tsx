'use client'

import Link from 'next/link'
import SpotifyLogoIcon from './icons/spotifyLogo'
import GoogleLogoIcon from './icons/googleLogo'
import FacebookLogoIcon from './icons/facebookLogo'
import AppleLogoIcon from './icons/appleLogo'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useState } from 'react'
import { Switch } from './ui/switch'
import { usePathname, useRouter } from 'next/navigation'
import { X } from 'lucide-react'

export default function LoginWindow() {
  const pathname = usePathname()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberAccount, setRememberAccount] = useState(true)

  const PROVIDER_LOGIN = [
    {
      title: 'Continuo with Google',
      icon: <GoogleLogoIcon />,
      action: () => {},
    },
    {
      title: 'Continuo with Facebook',
      icon: <FacebookLogoIcon />,
      action: () => {},
    },
    {
      title: 'Continuo with Apple',
      icon: <AppleLogoIcon />,
      action: () => {},
    },
  ]

  const FORM_INPUTS = [
    {
      name: 'email',
      placeholder: 'Email or username',
      type: 'email',
      value: email,
      onChange: setEmail,
    },
    {
      name: 'password',
      placeholder: 'Password',
      type: 'password',
      value: password,
      onChange: setPassword,
    },
  ]

  if (pathname !== '/login') {
    return <></>
  }

  return (
    <div className="fixed z-50 flex h-screen w-full items-center justify-center bg-white/15 backdrop-blur-sm dark:bg-black/15">
      <div className="min-w-md relative flex h-5/6 min-h-[calc(100vh_-_10px)] w-2/4 max-w-3xl flex-col rounded-xl bg-card px-24 shadow-lg">
        <button
          onClick={() => router.push('/')}
          className="absolute right-4 top-4"
        >
          <X />
        </button>
        <div className="flex flex-1 flex-col items-center justify-center gap-5 border-b border-muted">
          <SpotifyLogoIcon />
          <h1 className="text-3xl font-bold">Login to Spotify</h1>

          {/* provider buttons */}
          <div className="flex flex-col gap-2">
            {PROVIDER_LOGIN.map((provider) => (
              <button
                onClick={provider.action}
                className="flex h-12 w-80 items-center rounded-full border border-card-foreground duration-150 hover:border-foreground"
              >
                <div className="flex w-24 items-center justify-center">
                  {provider.icon}
                </div>
                <div className="font-bold">{provider.title}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <form className="flex h-full w-80 flex-col items-center justify-evenly">
            {FORM_INPUTS.map((input) => (
              <div className="w-full">
                <Label htmlFor="email">{input.placeholder}</Label>
                <Input
                  type={input.type}
                  className="rounded-[5px] border border-card-foreground bg-inherit active:border-foreground"
                  placeholder={input.placeholder}
                  name={input.name}
                  value={input.value}
                  onChange={(e) => input.onChange(e.target.value)}
                />
              </div>
            ))}

            <div className="flex w-full items-center gap-2">
              <Switch
                name="rememberAccount"
                defaultChecked={rememberAccount}
                onChange={() => setRememberAccount(!rememberAccount)}
              />
              <Label htmlFor="rememberAccount">Remember me</Label>
            </div>

            <button className="w-full rounded-full bg-primary p-3 font-bold text-black duration-200 hover:w-[21rem]">
              Login
            </button>

            <div className="w-full text-center">
              <Link
                href="https://accounts.spotify.com/#"
                className="underline duration-150 hover:text-primary"
              >
                Forgot your password
              </Link>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center gap-1 border-t border-muted p-10">
          <p>
            <span className="text-muted-foreground">
              Don't have an account?
            </span>{' '}
            <Link
              href="https://www.spotify.com/signup"
              className="underline duration-150 hover:text-primary"
            >
              Sign up in the real Spotify
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
