import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import FormReview from "@/components/create_booking/DoctorReviews/FormReview";
import type { AppointmentCardData } from "@/Types/appointmentCardData";
import { BookAgainButton } from "./BookAgainButton";
import CancelBtn from "./CancelBtn";

interface AppointmentCardProps {
  card: AppointmentCardData;
}

export function AppointmentCard({ card }: AppointmentCardProps) {
  if (!card) return null;
  console.log("cardcard");

  const { status, booking_date, booking_time, doctor, clinic_location } = card;

  console.log("RQ data:", card);

  const statusConfig = {
    Upcoming: {
      label: "Upcoming",
      color: "text-blue-600",
      primaryBtn: "Reschedule",
      secondaryBtn: "Cancel",
      cardHeaderDateColor: "text-muted-foreground",
    },
    Completed: {
      label: "Completed",
      color: "text-green-600",
      cardHeaderDateColor: "text-black",
      primaryBtn: "Feedback",
      secondaryBtn: "Book again",
    },
    Cancelled: {
      label: "Cancelled",
      color: "text-red-500",
      primaryBtn: "Support",
      secondaryBtn: "Book again",
      cardHeaderDateColor: "text-muted-foreground",
    },
  };

  const config = statusConfig[status];

  return (
    <Card className="w-100 rounded-xl border pt-3 shadow-sm">
      <CardContent className="px-4  space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div
            className={`flex items-center gap-2 ${config.cardHeaderDateColor}`}
          >
            <Calendar size={16} />
            <span>{`${booking_date} · ${booking_time}`}</span>
          </div>
          <span
            className={`font-medium ${
              config?.color || "text-muted-foreground"
            }`}
          >
            {config?.label || "N/A"}
          </span>
        </div>
        <hr />

        <div className="flex items-start gap-3">
          <img
            src="https://i.pravatar.cc/100"
            alt="Doctor"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="flex-1">
            <h3 className="font-semibold text-sm">{doctor.name}</h3>
            <p className="text-xs text-muted-foreground">
              {String(doctor.specialization.name)}
            </p>

            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <MapPin size={14} />
              <span>{clinic_location?.address}</span>
            </div>
          </div>
        </div>

        {/* <div className="flex gap-2">
          {status === "Completed" ? (
            <>
              <BookAgainButton
                asChild
                doctorId={doctor.id}
              >
                {config.secondaryBtn}
              </BookAgainButton>

              <FormReview>
                <Button className="flex-1 hover:cursor-pointer">
                  {config.primaryBtn}
                </Button>
              </FormReview>
            </>
          ) : (
            {status === "Completed" && (
             <CancelBtn appointmentId={card.id}>
  {config.secondaryBtn}
</CancelBtn>

            )}
            <>
              <Button
                variant="outline"
                className="flex-1 hover:cursor-pointer"
              >
                {config.secondaryBtn}
              </Button>
              <Button className="flex-1 hover:cursor-pointer">
                {config.primaryBtn}
              </Button>
            </>
          )}
        </div> */}

        <div className="flex gap-2">
          {status === "Completed" && (
            <>
              <BookAgainButton doctorId={doctor.id}>
                {config.secondaryBtn}
              </BookAgainButton>

              <FormReview>
                <Button className="flex-1">{config.primaryBtn}</Button>
              </FormReview>
            </>
          )}

          {status === "Upcoming" && (
            <>
              <CancelBtn appointmentId={card.id}>
                {config.secondaryBtn}
              </CancelBtn>

              <Button className="flex-1">{config.primaryBtn}</Button>
            </>
          )}

          {status === "Cancelled" && (
            <>
              <BookAgainButton doctorId={doctor.id}>
                {config.secondaryBtn}
              </BookAgainButton>

              <Button className="flex-1">{config.primaryBtn}</Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
