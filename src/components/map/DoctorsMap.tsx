import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import MarkerClusterGroup from "react-leaflet-cluster"
import "react-leaflet-cluster/dist/assets/MarkerCluster.css"
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css"
import { createDoctorIcon } from "./createDoctorIcon"
import Recenter from "./Recenter"
import type { DoctorInfo } from "@/Types/Doctors.types"
import useMap from "@/hooks/useMap"

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

const DoctorsMap = ({ center }: DoctorInfo) => {
  const { doctorAddress, handleMarkerClick } = useMap()

  return (
    <div className="w-full h-100 rounded-[16px] overflow-hidden relative">
      <MapContainer
        center={center}
        zoom={18}
        zoomControl={false}
        className="w-full h-full z-1"
      >
        <Recenter center={center} />
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup chunkedLoading>
          {doctors.map((doc) => (
            <Marker
              key={doc.id}
              position={[doc.location.latitude, doc.location.longitude]}
              icon={createDoctorIcon(doc.profile_photo)}
              eventHandlers={{
                click: () => handleMarkerClick(doc.clinic_address),
              }}
            >
              <Popup>
                <div className="text-center p-1">
                  <strong className="block text-sm mb-1">{doc.name}</strong>
                  {/* <span className="text-xs text-gray-500 block">
                    {doc.specialty.name}
                  </span>
                  <span className="text-xs text-blue-500 block mt-1">
                    {doc.clinic_address}
                  </span> */}
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
      <div className="flex items-center absolute bottom-[22px] left-[22px] z-10 max-w-[300px] bg-white text-black py-[14px] px-[16px] rounded-[10px] shadow-[0_4px_7px_rgba(0,0,0,0.15)]">
        <img className="w-6 pr-2" src="/imgs/Icon.png" alt="Map icon" />
        <span className="text-sm">{doctorAddress}</span>
      </div>
    </div>
  )
}

export default DoctorsMap
