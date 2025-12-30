import api from "./axios";
export const cancelAppointment = async (appointmentId: string) => {
  const { data } = await api.post(
    `patient/bookings/${appointmentId}/cancel`,
  );
  return data;
};
