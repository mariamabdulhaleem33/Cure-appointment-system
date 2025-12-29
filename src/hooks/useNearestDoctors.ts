import { getNearbyDoctors } from "@/services/doctor.services"
import { useQuery } from "@tanstack/react-query"

export function useNearestDoctors({
  lat,
  lng,
}: {
  lat?: number
  lng?: number
}) {
  const {
    data,
    isLoading,
    error: apiError,
  } = useQuery({
    queryKey: ["nearbyDoctors", lat, lng],
    queryFn: () => getNearbyDoctors({ lat: lat!, lng: lng! }),
    enabled: !!lat && !!lng,
    retry: false,
  })
  return { data, apiError, isLoading }
}
