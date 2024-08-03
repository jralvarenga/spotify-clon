declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      SPOTIFY_CLIENT_ID: string
      SPOTIFY_CLIENT_SECRET: string
      APP_URL: string
      SPOTIFY_STATE_KEY_NAME: string
    }
  }
}

export { }