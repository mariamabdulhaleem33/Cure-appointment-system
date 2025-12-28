// hooks/useDoctor.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { IReview } from "../types";

export const useDoctorReviews = (
  doctorId?: number | null,
  token?: string | null
) => {
  return useQuery<IReview[]>({
    queryKey: ["doctorReviews", doctorId],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/reviews/doctor/${doctorId}`,
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
