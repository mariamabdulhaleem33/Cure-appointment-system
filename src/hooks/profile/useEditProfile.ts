
import { ProfilAPI } from "@/services/profile.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useEditProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ProfilAPI.editProfileDetails,
    onSuccess: () => {
      toast.success("Profile updated successfully!");
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.message || "Failed to update profile.";
      toast.error(message);
    },
  });
};
