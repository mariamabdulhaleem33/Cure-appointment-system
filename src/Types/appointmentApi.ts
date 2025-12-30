
export interface AppointmentApi {
  id: number;
  user_id: number;
  doctor_id: number;
  booking_date: string;
  booking_time: string;
  status: "Upcoming" | "Canceled" | "Completed";
  price: number;
  created_at: string;
  updated_at: string;

  doctor: {
    id: number;
    user_id: number;
    specializations_id: number;
    experience_years: number;
    session_price: string;
    about_me: string;

    availability_slots: {
      date: string;
      from: string;
      to: string;
    }[];

    clinic_location: {
      lat: number;
      lng: number;
      address: string;
    };
  };

  payment: null | unknown;

  payment_method: {
    id: number;
    name: string;
    code: string;
  };
}

