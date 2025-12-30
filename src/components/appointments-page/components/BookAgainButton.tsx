import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BookAgainButtonProps {
  doctorId: string;
  children: ReactNode;
}

export const BookAgainButton = ({
  doctorId,
  children,
}: BookAgainButtonProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className="flex-1 hover:cursor-pointer"
    >
      <Link to={`/booking/${doctorId}`}>{children}</Link>
    </Button>
  );
};
