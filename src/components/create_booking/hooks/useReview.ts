// hooks/useDoctor.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ApiResponse } from "../types";

export const useDoctorReviews = (
  doctorId?: number | null,
  token?: string | null
) => {
  return useQuery<ApiResponse, Error>({
    queryKey: ["doctorReviews", doctorId],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}reviews/doctor/${doctorId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      // console.log(res.data.data.reviews.data);
      return data;
    },
    enabled: !!doctorId,
  });
};
