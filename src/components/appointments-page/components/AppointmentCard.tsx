import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

type AppointmentStatus = "upcoming" | "completed" | "canceled";

interface AppointmentCardProps {
  status: AppointmentStatus;
}

export function AppointmentCard({ status }: AppointmentCardProps) {
  const statusConfig = {
    upcoming: {
      label: "Upcoming",
      color: "text-blue-600",
      primaryBtn: "Reschedule",
      secondaryBtn: "Cancel",
    },
    completed: {
      label: "Completed",
      color: "text-green-600",
      primaryBtn: "Feedback",
      secondaryBtn: "View Details",
    },
    canceled: {
      label: "Canceled",
      color: "text-red-500",
      primaryBtn: "Support",
      secondaryBtn: "Book again",
    },
  };

  const config = statusConfig[status];

  return (
    <Card className="w-100 rounded-xl border pt-3 shadow-sm">
      <CardContent className="px-4  space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar size={16} />
            <span>Monday, July 21 · 11:00 AM</span>
          </div>
          <span className={`font-medium ${config.color}`}>{config.label}</span>
        </div>
        <hr />

        <div className="flex items-start gap-3">
          <img
            src="https://i.pravatar.cc/100"
            alt="Doctor"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="flex-1">
            <h3 className="font-semibold text-sm">Jennifer Miller</h3>
            <p className="text-xs text-muted-foreground">Psychiatrist</p>

            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <MapPin size={14} />
              <span>129 El-Nasr Street, Cairo, Egypt</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1"
          >
            {config.secondaryBtn}
          </Button>

          <Button className="flex-1 ">{config.primaryBtn}</Button>
        </div>
      </CardContent>
    </Card>
  );
}
