import { useToggleFavorite } from "@/hooks/useToggleFavorite";
import { Heart } from "lucide-react";
import type { FC } from "react";


type FavButtonProps = {
    doctorId: number
}

const FavButton: FC <FavButtonProps> = ({doctorId}) => {
  const { isFavorite, toggleFavorite } = useToggleFavorite(doctorId);
  return (
    <button
      onClick={toggleFavorite}
      className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white"
    >
      <Heart
        size={24}
        className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}
      />
    </button>
  );
};
export default FavButton;
