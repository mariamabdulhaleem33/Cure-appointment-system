// hooks/useCreateBooking.ts
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface BookingPayload {
  doctor_id: number | null;
  appointment_date: string;
  appointment_time: string;
  payment_method: string;
  notes?: string | null;
}

export const useCreateBooking = (token: string | null) => {
  return useMutation({
    mutationFn: async (payload: BookingPayload) => {
      if (!token) {
        throw new Error("NOT_AUTHENTICATED");
      }

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/bookings`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      console.log("📥 API Response:", res.data);
      return res.data;
    },
  });
};
