export type FavoriteDoctorResponse = {
  id: number;
  doctor_id: number;
  doctor: {
    id: number;
    name: string;
    profile_photo: string;
    specialization_name: string;
    session_price: string;
    clinic_location: {
      address: string;
    };
    average_rating: number
    availability_slots: Array<{
      from: string;
      to: string;
    }>;
  };
};
