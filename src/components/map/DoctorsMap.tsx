import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import MarkerClusterGroup from "react-leaflet-cluster"
import "react-leaflet-cluster/dist/assets/MarkerCluster.css"
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css"
import { createDoctorIcon } from "./createDoctorIcon"
import Recenter from "./Recenter"
import type { DoctorMapProps, DoctorProfile } from "@/Types/Doctors.types"
import L from "leaflet"
import { test } from "@/assets"

// const doctors = [
//   {
//     id: 1,
//     name: "Robert Johnson",
//     email: "doctor1@example.com",
//     mobile: null,
//     profile_photo: "/imgs/doc-1.jpg",
//     specialty: {
//       id: 1,
//       name: "General Practitioner",
//       image: "gp.png",
//     },
//     license_number: "LIC-10001",
//     bio: "Experienced cardiologist with 10 years of practice.",
//     session_price: 150,
//     clinic_address: "Clinic 1, Cairo",
//     location: {
//       latitude: 30.0444,
//       longitude: 31.2357,
//     },
//     experience_years: 10,
//   },
//   {
//     id: 2,
//     name: "Robert Johnson",
//     email: "doctor2@example.com",
//     mobile: null,
//     profile_photo: "/imgs/doc-2.jpg",
//     specialty: {
//       id: 2,
//       name: "Cardiologist",
//       image: "cardio.png",
//     },
//     license_number: "LIC-10002",
//     bio: "Dermatologist specializing in skin treatments.",
//     session_price: 120,
//     clinic_address: "Clinic 2, Cairo",
//     location: {
//       latitude: 30.045,
//       longitude: 31.236,
//     },
//     experience_years: 8,
//   },
//   {
//     id: 3,
//     name: "Robert Johnson",
//     email: "doctor3@example.com",
//     mobile: null,
//     profile_photo: "/imgs/doc-3.jpg",
//     specialty: {
//       id: 3,
//       name: "Dermatologist",
//       image: "derma.png",
//     },
//     license_number: "LIC-10003",
//     bio: "General surgeon with 15 years of experience.",
//     session_price: 200,
//     clinic_address: "Clinic 3, Cairo",
//     location: {
//       latitude: 30.046,
//       longitude: 31.237,
//     },
//     experience_years: 15,
//   },
//   {
//     id: 4,
//     name: "Robert Johnson",
//     email: "doctor3@example.com",
//     mobile: null,
//     profile_photo: "/imgs/doc-4.png",
//     specialty: {
//       id: 4,
//       name: "Dermatologist",
//       image: "derma.png",
//     },
//     license_number: "LIC-10003",
//     bio: "General surgeon with 15 years of experience.",
//     session_price: 200,
//     clinic_address: "Clinic 3, Cairo",
//     location: {
//       latitude: 30.046,
//       longitude: 31.2,
//     },
//     experience_years: 15,
//   },
// ]

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})
const DoctorsMap = (props: DoctorMapProps) => {
  console.log(props.userLocation)
  return (
    <div className={`w-full h-${props.height} rounded-4 relative`}>
      <MapContainer
        center={props.userLocation}
        zoom={props.variant === "home" ? 13 : 18}
        zoomControl={false}
        className="w-full h-full z-1"
      >
        {props.variant === "modal" && (
          <Recenter center={props.doctorInfo?.center} />
        )}
        {props.variant === "home" && <Recenter center={props.userLocation} />}
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup chunkedLoading>
          {props.doctors.map((doc: DoctorProfile) => (
            <Marker
              key={doc.id}
              position={[doc.clinic_location.lat, doc.clinic_location.lng]}
              icon={createDoctorIcon(test)}
              eventHandlers={{
                click: () => {
                  if (props.variant === "modal") {
                    props.handleDoctorInfo(
                      doc.clinic_location.address,
                      doc.clinic_location.lat,
                      doc.clinic_location.lng
                    )
                  }
                },
              }}
            >
              <Popup>
                <div className="text-center p-1">
                  <strong className="block text-sm mb-1">
                    {doc.user.name}
                  </strong>
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

          <Marker position={props.userLocation} icon={redIcon}>
            {/* <Popup>
                <div className="text-center p-1">
                  <strong className="block text-sm mb-1">
                    {doc.user.name}
                  </strong>
                </div>
              </Popup> */}
          </Marker>
        </MarkerClusterGroup>
      </MapContainer>
      {props.variant === "modal" && (
        <div className="flex items-center absolute bottom-5.5 left-5.5 z-10 max-w-75 bg-white text-black py-3.5 px-4 rounded-[10px] shadow-[0_4px_7px_rgba(0,0,0,0.15)]">
          <img className="w-6 pr-2" src="/imgs/Icon.png" alt="Map icon" />
          <span className="text-sm">{props.doctorInfo.doctorAddress}</span>
        </div>
      )}
    </div>
  )
}

export default DoctorsMap
