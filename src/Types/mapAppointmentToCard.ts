import type { AppointmentApi } from "@/Types/appointmentApi";
import type { AppointmentCardData } from "@/Types/appointmentCardData";

export const mapAppointmentToCard = (
  appointment?: AppointmentApi,
): AppointmentCardData | null => {
  if (!appointment) return null;

  const mappedStatus: AppointmentCardData["status"] =
    appointment.status === "Rescheduled" ? "Upcoming" : appointment.status;

  return {
    id: appointment.id,
    date: appointment.booking_date,
    time: appointment.booking_time,
    status: mappedStatus,

    doctor: {
      id: appointment.doctor.id,
      name: appointment.doctor.user.name,
      specialization: appointment.doctor.specialization.name,
      img: appointment.doctor.user.profile_photo || "/doctor-placeholder.png",
    },

    specialization: {
      id: appointment.doctor.specialization.id,
      name: appointment.doctor.specialization.name,
    },

    clinic: {
      address: appointment.doctor.clinic_location?.address ?? "Unknown Address",
    },
  };
};
