export interface Doctor {
  id: number
  name: string
  email: string
  mobile: string | null
  profile_photo: string

  specialty: {
    id: number
    name: string
    image: string
  }

  license_number: string
  bio: string
  session_price: number
  clinic_address: string

  location: {
    latitude: number
    longitude: number
  }

  experience_years: number
}

type BaseProps = {
  doctors: DoctorProfile[]
  height: "100" | "130"
}

type HomeVariantProps = BaseProps & {
  variant: "home"
  userLocation: [number, number]
  doctorInfo?: never
  handleDoctorInfo?: never
}

type ModalVariantProps = BaseProps & {
  variant: "modal"

  doctorInfo: {
    doctorAddress: string
    center: [number, number]
  }
  handleDoctorInfo: (address: string, lat: number, lng: number) => void
  userLocation: [number, number]
}

export type DoctorMapProps = HomeVariantProps | ModalVariantProps

export interface DoctorAddress {
  doctorAddress: string
  center: [number, number]
}

export interface DoctorProps {
  imageUrl: string
  name: string
  specialty: string
  rate: number
  startTime: string
  endTime: string
  forBooking: boolean
  price: number
  onClick?: () => void
  userId?: string
}

/* NEW TYPE FOR THE NEW API RESPONSE */

// User info
export interface User {
  name: string
  email: string
}

// Availability slot
export interface AvailabilitySlot {
  date: string // "2025-12-31"
  from: string // "09:00"
  to: string // "09:30"
}

// Clinic location
export interface ClinicLocation {
  lat: number
  lng: number
  address: string
}

// Main response
export interface DoctorProfile {
  id: number
  user: User
  specialization: string
  session_price: string
  availability_slots: AvailabilitySlot[]
  clinic_location: ClinicLocation
}
