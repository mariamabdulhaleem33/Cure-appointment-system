import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import MarkerClusterGroup from "react-leaflet-cluster"
import "react-leaflet-cluster/dist/assets/MarkerCluster.css"
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css"
import Recenter from "./Recenter"
import type { DoctorMapProps, DoctorProfile } from "@/Types/Doctors.types"
import L from "leaflet"
import { createDoctorIcon } from "./createDoctorIcon"

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
  return (
    <div className={`w-full h-${props.height} rounded-4 relative`}>
      <MapContainer
        center={props.userLocation}
        zoom={props.variant === "home" ? 16 : 18}
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
          {props?.doctors?.map((doc: DoctorProfile) => (
            <Marker
              key={doc.id}
              position={[doc?.clinic_location.lat, doc?.clinic_location.lng]}
              icon={createDoctorIcon(doc?.user?.profile_photo)}
              eventHandlers={{
                click: () => {
                  if (props.variant === "modal") {
                    props.handleDoctorInfo(
                      doc?.clinic_location.address,
                      doc?.clinic_location.lat,
                      doc?.clinic_location.lng
                    )
                  }
                },
              }}
            >
              <Popup>
                <div className="text-center p-1">
                  <strong className="block text-sm mb-1">
                    {doc?.user.name}
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
