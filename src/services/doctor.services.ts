import api from "@/api/axios"
interface NearbyDoctorsParams {
  lat: number
  lng: number
}

export const getNearbyDoctors = async ({ lat, lng }: NearbyDoctorsParams) => {
  const response = await api.get("/doctors/nearby", {
    params: {
      lat,
      lng,
    },
  })

  return response.data
}

export const getTopRatedDoctors = async () => {
  const response = await api
    .get("/reviews/top-doctors")
    .then((res) => res.data.data)

  return response
}
