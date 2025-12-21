import DetailCard from "./DetailCard"
import { payOnline } from "@/assets"

export default function PaymentCard() {
  return (
    <div className="border-[#99A2AB] border h-full rounded-[30px] flex flex-col justify-between">
      <div className="px-[33px] md:w-full h-full mx-auto">
        <img src={payOnline} className="w-full  h-full " />
      </div>
      <DetailCard
        headingText={"Book & Pay Online"}
        descText={
          "Confirm your appointment and pay securely using various payment options—credit card, mobile wallet."
        }
      />
    </div>
  )
}
