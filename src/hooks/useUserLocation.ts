import { useState, useEffect } from "react"
interface LocationCoords {
  lat: number
  lng: number
}

export const useUserLocation = () => {
  const [coords, setCoords] = useState<LocationCoords | null>(null)
  const [geoError, setGeoError] = useState<string | null>(null)
  const [isLoadingLocation, setIsLoadingLocation] = useState(true)
  useEffect(() => {
    if (!navigator.geolocation) {
      setGeoError("failed to detect user location")
      setIsLoadingLocation(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        })
        setIsLoadingLocation(false)
      },
      (err) => {
        setGeoError("User denied accessing his own location")
        setIsLoadingLocation(false)
        // setCoords({ lat: 31.2352, lng: 30.0434 })
      }
    )
  }, [])

  return {
    lat: coords?.lat || 20.0,
    lng: coords?.lng || 20.0,
    isLoadingLocation,
    geoError,
  }
}
