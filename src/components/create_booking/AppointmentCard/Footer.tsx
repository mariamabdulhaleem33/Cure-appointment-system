import type { DayGroup } from "../types";
import { Loader2 } from "lucide-react";
import { useCreateBooking } from "../hooks/useCreateBooking";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type IProps = {
  doctorId: number | null;
  selectedTime: string;
  currentDay: DayGroup;
  session_price: string;
};

const Footer = ({
  selectedTime,
  currentDay,
  doctorId,
  session_price,
}: IProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const token: string | null = localStorage.getItem("authToken");
  const startTime = selectedTime.split(" - ")[0].substring(0, 5); // create Book Function
  const { mutate: createBooking, isPending } = useCreateBooking(token);
  const handleBooking = () => {
    if (!selectedTime) {
      toast.error("Please select a time slot first", {
        position: "top-center",
      });
      return;
    }
    createBooking(
      {
        doctor_id: doctorId,
        booking_date: currentDay.date,
        booking_time: startTime,
        price: Number(session_price),
        payment_method_id: 1,
      },
      {
        onError: (error: unknown) => {
          let message = "Something went wrong, please try again";
          if (axios.isAxiosError(error)) {
            message = error.response?.data?.message || message;
          } else if (error instanceof Error) {
            message = error.message;
          }
          toast.error(message, {
            position: "top-center",
          });
        },

        onSuccess: (data) => {
          toast.success("Booking created successfully", {
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
        <span className="text-sm md:text-md font-medium">
          {selectedTime
            ? `${currentDay.dayName} - ( ${selectedTime} )`
            : "Please select a slot"}
        </span>

        <button
          onClick={handleBooking}
          className={`px-6 py-2 rounded-lg border transition border-[#145DB8] bg-[#145DB8] text-white hover:bg-blue-800 cursor-pointer`}
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
