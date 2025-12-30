import { Heart, MessageCircleMore } from "lucide-react";
import doc from "../../../assets/doc.jpg";
import api from "@/api/axios";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
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
          <img
            src={photo ? photo : doc}
            alt="doctor image"
            className="w-[113px] h-[113px] rounded-full"
          />
          <h2 className="font-normal text-[20px]">{name}</h2>
          <p className="text-[14px] text-[#404448]">{specialty}</p>
        </div>
        <span className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white">
          <MessageCircleMore size={24} />
        </span>
      </div>
    </>
  );
};

export default Header;
