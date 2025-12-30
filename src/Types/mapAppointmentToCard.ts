import type { AppointmentApi } from "@/Types/appointmentApi";
import type { AppointmentCardData } from "@/Types/appointmentCardData";

export const mapAppointmentToCard = (
  appointment: AppointmentApi | undefined,
): AppointmentCardData | null => {
  if (!appointment) return null; 
  console.log("appointment", appointment);
  return {
    id: appointment.id ?? "unknown",
    date: appointment.booking_date ?? "unknown",
    time: appointment.booking_time ?? "unknown",
    status: appointment.status ?? "upcoming", 
    // status: !appointment.status || "Completed", 

    doctor: {
      name: appointment.doctor?.user_id
        ? `Dr. ${appointment.doctor.user_id}`
        : "Dr. Unknown",
      specialization: appointment.doctor?.specialization ?? "Cardiology", 
      img: appointment.doctor?.img ?? "/doctor-placeholder.png",
      id: appointment.doctor?.id ?? 0,
    },

    clinic: {
      address:
        appointment.doctor?.clinic_location?.address ?? "Unknown Address",
    },
  };
};
