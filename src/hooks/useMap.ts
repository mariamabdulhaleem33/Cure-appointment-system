import type { Doctor } from "@/Types/Doctors.types"
import { useState } from "react"

export default function useMap() {
  const [doctorInfo, setDoctorInfo] = useState<Doctor>({
    doctorAddress: "Cairo, Egypt",
    center: [30.0444, 31.2357],
  })

  function handleDoctorInfo(doctorAddress: string, lat: number, lng: number) {
    setDoctorInfo({ doctorAddress: doctorAddress, center: [lat, lng] })
  }

  return { doctorInfo, handleDoctorInfo }
}
