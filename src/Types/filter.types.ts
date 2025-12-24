export type FilterOptions = {
  specialty: string | null;
  date: string | null;
  gender: string | null;
  sortBy: "price_low" | "price_high" | "rating" | "none";
};

export interface Specialty {
  id: number;
  name: string;
  icon: React.ReactNode;
}

export interface Doctor {
  id: number;
  name: string;
  specialty: {
    id: number;
    name: string;
    image: string;
    icon: React.ReactNode;
  };
  hospital: string;
  rating: number;
  price: number;
  time: string;
  session_price: number;
  profile_photo: string;
  gender?: string; // Add gender if not already in Doctor type
  available_dates?: string[]; // Add available dates if not already
}