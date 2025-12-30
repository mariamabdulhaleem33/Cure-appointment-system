import api from "./axios";
import type { AppointmentApi } from "@/Types/appointmentApi";
import type { AppointmentCardData } from "@/Types/appointmentCardData";
import { mapAppointmentToCard } from "@/Types/mapAppointmentToCard";

export const getAppointments = async (): Promise<AppointmentCardData[]> => {
  const response = await api.get<AppointmentApi[]>("patient/all-bookings");
  console.log("FULL RESPONSE:", response.data);
  // return response.data.map(mapAppointmentToCard);
  return response.data
    .map(mapAppointmentToCard)
    .filter((card): card is AppointmentCardData => card !== null);

};
