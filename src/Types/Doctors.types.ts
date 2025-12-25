export interface Doctor {
  doctorAddress: string
  center: [number, number]
}

export interface DoctorInfo {
  doctorInfo: {
    doctorAddress: string
    center: [number, number]
  }
  handleDoctorInfo: (address: string, lat: number, lng: number) => void
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
}
