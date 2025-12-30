export type AppointmentCardData = {
  id: number;
  date: string;
  time: string;
  status: "Upcoming" | "Canceled" | "Completed";
  doctor: {
    name: string;
    specialization: string;
    img: string;
    id: number,
  };
  clinic: {
    address: string;
  };
};