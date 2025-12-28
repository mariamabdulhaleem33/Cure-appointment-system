import { getTopRatedDoctors } from "@/services/doctor.services"
import type { DoctorProfile } from "@/Types/Doctors.types"
import { useQuery } from "@tanstack/react-query"

export function useTopRatedDoctors() {
  const { data, isPending } = useQuery<DoctorProfile[]>({
    queryKey: ["topDoctors"],
    queryFn: () => getTopRatedDoctors(),
  })

  return { data, isPending }
}
