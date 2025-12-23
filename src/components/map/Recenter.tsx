import { useEffect } from "react"
import { useMap } from "react-leaflet"

export default function Recenter({ center }: { center: [number, number] }) {
  const map = useMap()

  useEffect(() => {
    map.setView(center)
  }, [map, center])
  return null
}
