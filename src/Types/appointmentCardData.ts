export type AppointmentCardData = {
  id: number;
  date: string;
  time: string;
  status: "Upcoming" | "Cancelled" | "Completed";
  doctor: {
    name: string;
    specialization: string;
    img: string;
    id: number;
  };
  specialization: {
    name: string;
    id: number;
  };
  clinic: {
    address: string;
  };
};
