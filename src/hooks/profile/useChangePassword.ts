
import { ProfilAPI } from "@/services/profile.service";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useLogout } from "../useAuth";

export const useChangePassword = () => {
  const logout = useLogout();
  return useMutation({
    mutationFn: ProfilAPI.changePassword,
    onSuccess: () => {
      toast.success("Password changed successfully! please login again.");
      logout();
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.message || "Failed to change password.";
      toast.error(message);
    },
  });
};
