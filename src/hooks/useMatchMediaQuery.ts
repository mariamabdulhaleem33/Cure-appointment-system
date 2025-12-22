// this hook accepts a mediaquery like this :useMediaQuery("(min-width: 640px)") and returns  boolean value (true) if the width of the screen is bigger than the given mediaQuery
import { useEffect, useState } from "react"
export function useMediaQuery(screenSize: string) {
  const [isLargeScreen, setIsLargeScreen] = useState(false) //1
  useEffect(() => {
    // matchMedia returns an object called MediaQueryList that includes (matches) that returns boolean
    const mediaQuery = window.matchMedia(screenSize) //2

    setIsLargeScreen(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  return { isLargeScreen }
}
