
import { ProfilAPI } from "@/services/profile.service";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useEditProfile = () => {
  return useMutation({
    mutationFn: ProfilAPI.editProfileDetails,
    onSuccess: () => {
      toast.success("Profile updated successfully!");
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.message || "Failed to update profile.";
      toast.error(message);
    },
  });
};
