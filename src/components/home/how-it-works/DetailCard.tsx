import Description from "../../ui/Description"
import Heading from "../../ui/Heading"
import type { ReactNode } from "react"
type DetailCardProps = {
  headingText: ReactNode
  descText: ReactNode
  // headingText: string | ElementType
  // descText: string | ElementType
  /*
   not gonna work 
   because Element can not be used like this : {heading Text} 
   instead we use ReactNode which means any thing that react can renders
   so it will work if u sent to the component any thing even strings
   */
}
export default function DetailCard({ headingText, descText }: DetailCardProps) {
  return (
    <div className="space-y-1 z-10 text-start p-2 sm:p-4 shadow-[0_0_13px_0_#0000001A] rounded-[10px_10px_30px_30px] bg-white w-full none">
      <Heading tag={"h3"} className="sm:text-[20px] mb-1">
        {headingText}
      </Heading>
      <Description tag={"p"} className="sm:text-[14px]">
        {descText}
      </Description>
    </div>
  )
}
