export interface IReview {
  id: number;
  name: string;
  time: string;
  rating: number;
  image: string;
  comment: string;
}
export type BookingDate = {
  date: string;
  start_time: string;
  end_time: string;
  day_name: string;
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
