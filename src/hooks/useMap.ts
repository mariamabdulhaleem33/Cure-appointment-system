import { useState } from "react"

export default function useMap() {
  const [center, setCenter] = useState<[number, number]>([30.0444, 31.2357])
  const [doctorAddress, setDoctorAddress] = useState("Cairo, Egypt")

  function centerMap(lat: number, lng: number) {
    setCenter([lat, lng])
  }

  function handleMarkerClick(doctorAddress: string) {
    setDoctorAddress(doctorAddress)
  }

  return { center, centerMap, doctorAddress, handleMarkerClick }
}
