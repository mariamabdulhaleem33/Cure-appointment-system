import DetailCard from "./DetailCard"
import { searchDoctor } from "@/assets"
export default function SearchDoctor() {
  return (
    <div className="border-[#99A2AB] border rounded-[30px] flex flex-col justify-between">
      <div className="w-full  pt-6 pb-4 h-full flex-1">
        <img src={searchDoctor} className="w-full h-full object-contain" />
      </div>
      <DetailCard
        headingText={"Search for a Doctor"}
        descText={
          "Easily browse by specialty, location, or doctor name to find the right healthcare provider for your needs."
        }
      />
    </div>
  )
}
