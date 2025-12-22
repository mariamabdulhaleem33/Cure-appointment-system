import type { ElementType, ReactNode } from "react"
import { twMerge } from "tailwind-merge"
// i will place this type later in its folder
interface HeadingProps {
  tag: ElementType
  className?: string
  children: ReactNode
}
import { cn } from "../../lib/utils"
export default function Description({
  tag: Component = "h3",
  className,
  children,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-[Montserrat] text-[16px] sm:text-[20px] text-[#6D7379] font-normal tracking-normal",
        className
      )}
    >
      {children}
    </Component>
  )
}
