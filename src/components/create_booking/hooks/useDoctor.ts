// hooks/useDoctor.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useDoctor = (doctorId?: number | null, token?: string | null) => {
  return useQuery({
    queryKey: ["doctor", doctorId],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/doctors/${doctorId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      return res.data.data;
    },
    enabled: !!doctorId,
  });
};
