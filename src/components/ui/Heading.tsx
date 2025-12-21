import type { ElementType, ReactNode } from "react"
import { cn } from "../../lib/utils"

interface HeadingProps {
  tag: ElementType
  className?: string
  children: ReactNode
}
export default function Heading({
  tag: Component = "h2",
  className,
  children,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-[Georgia] text-[24px] sm:text-[40px] text-[#05162C] font-normal tracking-normal",
        className
      )}
    >
      {children}
    </Component>
  )
}
