import DoctorCard from "@/components/ui/DoctorCard";
import { useQuery } from "@tanstack/react-query";
import api from "@/api/axios";
import { type FC } from "react";
import type { FavoriteDoctorResponse } from "@/Types/Favorites.types";

const Favorites: FC = () => {
  const { data } = useQuery<FavoriteDoctorResponse[]>({
    queryKey: ["favorites"],
    queryFn: async () => {
      const res = await api.get("/all-favourites");
      return res.data.favourites;
    },
  });

  return (
    <div className="flex flex-col py-10 w-full mx-auto gap-15 max-w-7xl px-10">
      <p className="text-2xl font-secondary lg:text-3xl text-slate-900">
        Your Favourites ({data?.length || 0})
      </p>

      <div className="flex justify-center gap-x-10 gap-y-10 flex-wrap">
        {data?.map((fav) => {
          const doc = fav.doctor;
          const startTime = doc.availability_slots[0].from;
          const endTime =
            doc.availability_slots[doc.availability_slots.length - 1].to;

          return (
            <DoctorCard
              key={fav.doctor_id}
              style="w-[90%] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              name={doc.name}
              imageUrl={doc.profile_photo}
              specialty={doc.specialization_name}
              startTime={startTime}
              endTime={endTime}
              address={doc.clinic_location.address}
              forBooking={true}
              price={parseFloat(doc.session_price)}
              userId={fav.doctor_id}
              rate={doc.average_rating || 0}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
