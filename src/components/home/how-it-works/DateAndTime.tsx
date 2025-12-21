import DetailCard from "./DetailCard"
import { date } from "@/assets"
export default function DateAndTime() {
  return (
    <div className="border-[#99A2AB] border pt-4 h-full overflow-hidden rounded-[30px] flex flex-col justify-between">
      <div className="w-[96%] mx-auto relative top-8">
        <img src={date} className="w-full" />
      </div>
      <DetailCard
        headingText={"Choose a Date & Time"}
        descText={
          "View real-time availability and pick a slot that works best for your schedule."
        }
      />
    </div>
  )
}
