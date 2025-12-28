import type { DayGroup } from "../types";
import { Loader2 } from "lucide-react";
import { useCreateBooking } from "../hooks/useCreateBooking";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type IProps = {
  doctorId: number | null;
  selectedTime: string;
  currentDay: DayGroup;
  selectedMonth: string;
};
const Footer = ({
  selectedTime,
  currentDay,
  selectedMonth,
  doctorId,
}: IProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const token: string | null = localStorage.getItem("authToken");
  const startTime = selectedTime.split(" - ")[0];
  // create Book Function
  const { mutate: createBooking, isPending } = useCreateBooking(token);

  const handleBooking = () => {
    createBooking(
      {
        doctor_id: doctorId,
        appointment_date: currentDay.date,
        appointment_time: startTime,
        payment_method: "stripe",
        notes: null,
      },
      {
        onError: (error: any) => {
          const message =
            error?.response?.data?.message ||
            "Something went wrong, please try again";
          toast.error(message, {
            position: "top-center",
          });
        },

        onSuccess: (data) => {
          toast.success("Booking created successfully 🎉", {
            position: "top-center",
          });
          queryClient.invalidateQueries({
            queryKey: ["doctorAvailability", doctorId],
          });
          navigate("/payment", { state: { booking: data } });
        },
      }
    );
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">
          {selectedTime
            ? `${currentDay.dayName}, ${selectedMonth.split(",")[0]} ${
                currentDay.dayNumber
              } - ${selectedTime}`
            : "Please select a slot"}
        </span>

        <button
          onClick={handleBooking}
          disabled={!selectedTime}
          className={`px-6 py-2 rounded-lg border transition ${
            selectedTime
              ? "border-[#145DB8] bg-[#145DB8] text-white hover:bg-blue-800 cursor-pointer"
              : "border-gray-300 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isPending ? (
            <Loader2 className="h-6 w-6 animate-spin text-white" />
          ) : (
            "Book"
          )}
        </button>
      </div>
    </>
  );
};

export default Footer;
