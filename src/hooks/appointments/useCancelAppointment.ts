import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelAppointment } from "@/api/cancelAppointment";

export const useCancelAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelAppointment,
    onSuccess: () => {
      // refresh appointments list
      queryClient.invalidateQueries({
        queryKey: ["appointments"],
      });
    },
  });
};
