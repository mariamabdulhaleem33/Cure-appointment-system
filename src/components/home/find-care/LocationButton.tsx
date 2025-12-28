import { Link } from "react-router-dom"
import { cn } from "../../../lib/utils"
import { type ReactNode } from "react"
type LocationButtonProps = {
  icon?: ReactNode
  text: ReactNode
  className: string
  onClick?: () => void
}
const LocationButton = ({ icon, text, className }: LocationButtonProps) => {
  return (
    <Link
      to="/search"
      className={cn(
        "items-center hover:cursor-pointer h-12 pl-3 pr-4 py-2 gap-2 border text-[#145DB8] border-[#145DB8] rounded-[10px]  bg-white font-medium w-fit",
        className
      )}
    >
      {icon && (
        <span className="flex items-center justify-center text-xl">{icon}</span>
      )}
      <span>{text}</span>
    </Link>
  )
}

export default LocationButton
