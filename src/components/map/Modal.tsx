import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import DoctorCard from "../ui/DoctorCard"
import { FaRoute } from "react-icons/fa6"
import DoctorsMap from "./DoctorsMap"
import useMap from "@/hooks/useMap"

export default function Modal() {
  const doctors = [
    {
      id: 1,
      name: "Robert Johnson",
      email: "doctor1@example.com",
      mobile: null,
      profile_photo: "/imgs/doc-1.jpg",
      specialty: {
        id: 1,
        name: "General Practitioner",
        image: "gp.png",
      },
      license_number: "LIC-10001",
      bio: "Experienced cardiologist with 10 years of practice.",
      session_price: 150,
      clinic_address: "Clinic 1, Cairo",
      location: {
        latitude: 30.0444,
        longitude: 31.2357,
      },
      experience_years: 10,
    },
    {
      id: 2,
      name: "Robert Johnson",
      email: "doctor2@example.com",
      mobile: null,
      profile_photo: "/imgs/doc-2.jpg",
      specialty: {
        id: 2,
        name: "Cardiologist",
        image: "cardio.png",
      },
      license_number: "LIC-10002",
      bio: "Dermatologist specializing in skin treatments.",
      session_price: 120,
      clinic_address: "Clinic 2, Cairo",
      location: {
        latitude: 30.045,
        longitude: 31.236,
      },
      experience_years: 8,
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "doctor3@example.com",
      mobile: null,
      profile_photo: "/imgs/doc-3.jpg",
      specialty: {
        id: 3,
        name: "Dermatologist",
        image: "derma.png",
      },
      license_number: "LIC-10003",
      bio: "General surgeon with 15 years of experience.",
      session_price: 200,
      clinic_address: "Clinic 3, Cairo",
      location: {
        latitude: 30.046,
        longitude: 31.237,
      },
      experience_years: 15,
    },
    {
      id: 4,
      name: "Robert Johnson",
      email: "doctor3@example.com",
      mobile: null,
      profile_photo: "/imgs/doc-4.png",
      specialty: {
        id: 4,
        name: "Dermatologist",
        image: "derma.png",
      },
      license_number: "LIC-10003",
      bio: "General surgeon with 15 years of experience.",
      session_price: 200,
      clinic_address: "Clinic 3, Cairo",
      location: {
        latitude: 30.046,
        longitude: 31.2,
      },
      experience_years: 15,
    },
  ]

  // const { center, centerMap, doctorAddress, handleMarkerClick } = useMap()
  const { doctorInfo, handleDoctorInfo } = useMap()

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button className="flex justify-between items-center rounded-[10px] text-text-neutral-darker border px-[26px] py-3 text-sm cursor-pointer">
            <FaRoute className="pr-1" />
            <span>Map</span>
          </button>
        </DialogTrigger>
        <DialogContent className="md:min-w-3xl lg:min-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-left">
              {doctors.length} Results
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col lg:flex-row overflow-hidden">
            <div className="flex lg:flex-col gap-[16px] w-full h-fit lg:w-fit lg:h-100 overflow-y-auto overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-4 pr-4">
              {doctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  name={doctor.name}
                  imageUrl={doctor.profile_photo}
                  specialty={doctor.specialty.name}
                  rate={4.5}
                  forBooking={false}
                  price={doctor.session_price}
                  startTime="9:00"
                  endTime="10:30"
                  onClick={() => {
                    handleDoctorInfo(
                      doctor.clinic_address,
                      doctor.location.latitude,
                      doctor.location.longitude
                    )
                  }}
                />
              ))}
            </div>
            <div className="flex-1 mt-4 rounded-[16px] overflow-hidden">
              <DoctorsMap
                doctorInfo={doctorInfo}
                handleDoctorInfo={handleDoctorInfo}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
