import { Heart, MessageCircleMore } from "lucide-react";
import doc from "../../../assets/doc.jpg";
import api from "@/api/axios";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { IoMdCheckmarkCircle } from "react-icons/io";

type IProps = {
  name: string;
  specialty: string;
  photo: string | null;
  doctorId: number | null;
  initialIsFavorite?: boolean;
};
const Header = ({
  name,
  specialty,
  photo,
  doctorId,
  initialIsFavorite = false,
}: IProps) => {
  
  const mutation = useMutation({
    mutationFn: () => api.post(`/addOrRemove-favourite/${doctorId}`),

    onMutate: async () => {
      setIsFavorite((prev) => !prev);
    },

    onError: () => {
      setIsFavorite((prev) => !prev);
      toast.error("Please Try Again");
    },

    onSuccess: () => {
      toast(isFavorite 
          ? "Doctor added to favorites successfully!" 
          : "Doctor removed from favorites")
    },
  });

  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  const handleToggle = () => {
    mutation.mutate();
  };

  return (
    <>
      <div className="flex items-start justify-between">
        <button
          onClick={handleToggle}
          className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white"
        >
          <Heart
            size={24}
            className={
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }
          />
          </button>
        <div className="flex flex-col items-center justify-center">
          <div className="w-28.25 h-28.25 relative">
            <img
              src={photo ? photo : doc}
              alt="doctor image"
              className="w-full h-full rounded-full border border-gray-200 object-cover object-top"
            />
            <IoMdCheckmarkCircle
              size={25}
              className="text-blue-800 absolute bottom-0 right-3.5"
            />
          </div>

          <h2 className="font-normal text-[20px]">{name}</h2>
          <p className="text-[14px] text-[#404448]">{specialty}</p>
        </div>
        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
          <MessageCircleMore size={24} />
        </span>
      </div>
    </>
  );
};

export default Header;
