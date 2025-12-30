

export type Doctor = {
  id: number;
  user: {
    name: string;
  };
  specialization: {
    id: number;
    name: string;
    image: string;
  };
  hospital: string;
  rating: number;
  price: number;
  time: string;
  session_price: number;
  profile_photo: string | undefined;
};