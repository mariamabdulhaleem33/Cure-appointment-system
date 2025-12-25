// hooks/useDoctorAvailability.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useDoctorAvailability = (
  doctorId?: number | null,
  token?: string | null
) => {
  return useQuery({
    queryKey: ["doctorAvailability", doctorId],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/doctors/${doctorId}/availability`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      return res.data.data || [];
    },
    enabled: !!doctorId,
  });
};
