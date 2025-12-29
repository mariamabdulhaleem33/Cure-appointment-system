import DoctorCard from "@/components/ui/DoctorCard";
import { UserProfile } from "@/assets";
import type { FC } from "react";

const Favorites: FC = () => {
  return (
    <div className="flex flex-col py-10 w-full mx-auto gap-15 max-w-7xl  px-10 ">
      <p className="text-2xl font-secondary lg:text-3xl text-slate-900">
        Your Favourites
      </p>
      <div className="flex justify-center gap-x-10 gap-y-10 flex-wrap">
        <DoctorCard
          style="w-[90%] md:w-1/8 "
          name="ahmad"
          imageUrl={UserProfile}
          specialty="Dermatology"
          rate={4.9}
          startTime="9:00"
          endTime="7:00"
          address="cairo, Egypt"
          forBooking={true}
          price={300}
        />
        <DoctorCard
          style="w-[90%] md:w-1/8"
          name="ahmad"
          imageUrl={UserProfile}
          specialty="Dermatology"
          rate={4.9}
          startTime="9:00"
          endTime="7:00"
          address="cairo, Egypt"
          forBooking={true}
          price={300}
        />
        <DoctorCard
          style="w-[90%] md:w-1/8 "
          name="ahmad"
          imageUrl={UserProfile}
          specialty="Dermatology"
          rate={4.9}
          startTime="9:00"
          endTime="7:00"
          address="cairo, Egypt"
          forBooking={true}
          price={300}
        />
        <DoctorCard
          style="w-[90%] md:w-1/8 "
          name="ahmad"
          imageUrl={UserProfile}
          specialty="Dermatology"
          rate={4.9}
          startTime="9:00"
          endTime="7:00"
          address="cairo, Egypt"
          forBooking={true}
          price={300}
        />
      </div>
    </div>
  );
};
export default Favorites;
