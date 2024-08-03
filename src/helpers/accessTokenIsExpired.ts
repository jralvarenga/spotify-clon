import dayjs from "dayjs"

export function accessTokenIsExpired(savedDate: string) {
  const tokenSavedAtTs = dayjs(+savedDate * 1000)
  const currentDate = dayjs()
  const diff = currentDate.diff(tokenSavedAtTs, 'seconds')

  if (diff >= 3500) {
    return true
  } else {
    return false
  }
}