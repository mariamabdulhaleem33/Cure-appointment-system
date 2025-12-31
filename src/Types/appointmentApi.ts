export interface AppointmentApi {
  id: number;
  user_id: number;
  doctor_id: number;
  booking_date: string;
  booking_time: string;
  status: "Upcoming" | "Cancelled" | "Completed" | "Rescheduled";
  price: number;
  payment_method_id: number;
  created_at: string;
  updated_at: string;

  doctor: DoctorApi;
  payment: PaymentApi | null;
  payment_method: PaymentMethodApi;
}
export interface DoctorApi {
  id: number;
  user_id: number;
  specializations_id: number;
  experience_years: number;
  license_number: string;
  session_price: string;
  about_me: string;

  availability_slots: AvailabilitySlot[];
  clinic_location: ClinicLocation;

  user: DoctorUser;
  specialization: Specialization;
}
export interface AvailabilitySlot {
  date: string;
  from: string;
  to: string;
}

export interface ClinicLocation {
  lat: number;
  lng: number;
  address: string;
}

export interface DoctorUser {
  id: number;
  name: string;
  profile_photo: string;
  email: string;
}
export interface Specialization {
  id: number;
  name: string;
  image: string;
}
export interface PaymentApi {
  id: number;
  booking_id: number;
  payment_method_id: number;
  amount: number;
  transaction_id: string;
  status: string;
  created_at: string;
  updated_at: string;
}
export interface PaymentMethodApi {
  id: number;
  name: string;
  code: string;
}
