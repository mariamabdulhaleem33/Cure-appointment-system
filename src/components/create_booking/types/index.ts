interface User {
  id: number;
  name: string;
  profile_photo: string | null;
}

interface Booking {
  id: number;
  booking_date: string;
}

export interface IReview {
  id: number;
  booking_id: number;
  user_id: number;
  doctor_id: number;
  rating: number;
  comment: string;
  created_at: string;
  updated_at: string;
  user: User;
  booking: Booking;
}
export type BookingDate = {
  date: string;
  from: string;
  to: string;
};

export type Slot = {
  start: string;
  end: string;
};

export type DayGroup = {
  date: string;
  dayName: string;
  dayNumber: number;
  slots: Slot[];
};
export interface Specialty {
  id: number;
  name: string;
  image: string;
}

export interface ILocation {
  location?: {
    latitude: number;
    longitude: number;
  };
}

export interface IDoctor {
  id: number;
  name: string;
  email: string;
  mobile: string | null;
  profile_photo: string;
  specialty: Specialty;
  license_number: string;
  bio: string;
  session_price: number;
  clinic_address: string;
  location: Location;
  experience_years: number;
}

export interface ILocation {
  latitude: number;
  longitude: number;
}
export interface ApiResponse {
  data: {
    reviews: {
      data: IReview[];
    };
  };
}
