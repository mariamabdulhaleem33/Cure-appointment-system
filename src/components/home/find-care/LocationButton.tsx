import { cn } from "../../../lib/utils";
import { type ReactNode } from "react";
type LocationButtonProps = {
  icon?: ReactNode;
  text: ReactNode;
  className: string;
  onClick?: () => void;
};
const LocationButton = ({ icon, text, className }: LocationButtonProps) => {
  return (
    <button
      //   onClick={onClick}
      className={cn(
        "items-center hover:cursor-pointer h-[48px] pl-[12px] pr-[16px] py-[8px] gap-[8px] border text-[#145DB8] border-[#145DB8] rounded-[10px]  bg-white font-medium w-fit",
        className
      )}
    >
      {icon && (
        <span className="flex items-center justify-center text-xl">{icon}</span>
      )}
      <span>{text}</span>
    </button>
  );
};

export default LocationButton;
