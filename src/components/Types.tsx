// ------------------ types ------------------


export type Doctor = {
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
  profile_photo: string | undefined;
};

