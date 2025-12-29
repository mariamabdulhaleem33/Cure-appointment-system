import Heading from "../../ui/Heading"
import { CiSearch } from "react-icons/ci"

import Description from "../../ui/Description"
import LocationButton from "./LocationButton"
import DoctorsMap from "@/components/map/DoctorsMap"
import { useUserLocation } from "@/hooks/useUserLocation"
import { useNearestDoctors } from "@/hooks/useNearestDoctors"

export default function FindCare() {
  const { lat, lng } = useUserLocation()

  const { data: doctors } = useNearestDoctors({ lat: lat, lng: lng })
  const mapLat = lat || 30.0444
  const mapLng = lng || 31.2357
  return (
    <div className="mt-50 home-container flex flex-col items-center  gap-6 lg:flex-row lg:justify-between ">
      <div className="flex flex-col lg:text-start text-center gap-2 lg:gap-8 max-w-122.5">
        <Heading tag={"h2"} className="text-[#05162C]">
          Find Care Near You in Seconds
        </Heading>
        <Description tag={"p"}>
          Allow location access or choose your city to instantly discover
          trusted doctors and clinics around you—quick, easy, and local.
        </Description>
        <LocationButton
          className="hidden lg:inline-flex"
          icon={<CiSearch />}
          text="Search by location"
        />
      </div>

      <div className="mt-4 rounded-[50px] h-130 w-full overflow-hidden md:w-160">
        <DoctorsMap
          variant="home"
          doctors={doctors?.data || []}
          userLocation={[mapLat, mapLng]}
          height={"130"}
        />
      </div>

      <LocationButton
        className="inline-flex lg:hidden"
        icon={<CiSearch />}
        text="Search by location"
      />
    </div>
  )
}
