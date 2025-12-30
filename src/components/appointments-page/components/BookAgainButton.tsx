
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type ButtonProps = React.ComponentProps<typeof Button>;


interface BookAgainButtonProps {
  doctorId: string;
  children: ReactNode;
  variant?: ButtonProps["variant"];
}

export const BookAgainButton = ({
  doctorId,
  children,
  variant = "outline",
}: BookAgainButtonProps) => {
  return (
    <Button
      asChild
      variant={variant}
      className="flex-1 hover:cursor-pointer"
    >
      <Link to={`/booking/${doctorId}`}>{children}</Link>
    </Button>
  );
};
