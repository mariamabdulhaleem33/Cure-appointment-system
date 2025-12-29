import { getTopRatedDoctors } from "@/services/doctor.services"
import type { TopRatedDoctor } from "@/Types/Doctors.types"
import { useQuery } from "@tanstack/react-query"

export function useTopRatedDoctors() {
  const { data, isPending } = useQuery<TopRatedDoctor[]>({
    queryKey: ["topDoctors"],
    queryFn: () => getTopRatedDoctors(),
  })

  return { data, isPending }
}
