import api from "@/api/axios";
import type { FavoriteDoctorResponse } from "@/Types/Favorites.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export const useToggleFavorite = (doctorId: number) => {
  const queryClient = useQueryClient();

  const { data: favorites = [] } = useQuery<FavoriteDoctorResponse[]>({
    queryKey: ["favorites"],
    queryFn: async () => {
      const res = await api.get("/all-favourites");
      return res.data.favourites;
    },
  });

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const currentFavorite = favorites.some((fav) => fav.doctor.id === doctorId);
    setIsFavorite(currentFavorite);
  }, [favorites, doctorId]);

  const mutation = useMutation({
    mutationFn: () => api.post(`/addOrRemove-favourite/${doctorId}`),

    onMutate: () => {
      setIsFavorite((prev) => !prev);
    },

    onSuccess: () => {
      toast.success(
        isFavorite
          ? "Doctor added to favorites successfully!"
          : "Doctor removed from favorites"
      );

      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },

    onError: () => {
      setIsFavorite((prev) => !prev);
      toast.error("Please try again");
    },
  });

  const toggleFavorite = () => {
    mutation.mutate();
  };

  return {
    isFavorite,
    toggleFavorite,
  };
};
