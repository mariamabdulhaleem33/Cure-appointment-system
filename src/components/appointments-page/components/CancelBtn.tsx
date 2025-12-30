import { useCancelAppointment } from "@/hooks/appointments/useCancelAppointment";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
interface CancelBtnProps {
  appointmentId: string;
  children: ReactNode;
}

export default function CancelBtn({
  appointmentId,
  children,
}: CancelBtnProps) {
  const { mutate: cancel, isPending } = useCancelAppointment();

  return (
    <Button
      variant="outline"
      className="flex-1"
      disabled={isPending}
      onClick={() => cancel(appointmentId)}
    >
      {isPending ? "Canceling..." : children}
    </Button>
  );
}


