import { FaStar } from "react-icons/fa6"
import { CiClock2 } from "react-icons/ci"
import { Link } from "react-router-dom"
import type { DoctorProps } from "@/Types/Doctors.types"

export default function DoctorCard({
  imageUrl,
  name,
  specialty,
  rate,
  startTime,
  endTime,
  forBooking,
  price,
  userId,
  onClick,
  address,
  style
}: DoctorProps) {
  return (
    <div
      className={`flex flex-col gap-2 cursor-pointer justify-center rounded-[10px] min-w-89.5 p-4 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.1)] ${style}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-18.75 h-17 rounded-[10px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt="Doctor Image"
          />
        </div>
        <div className="flex-1">
          <h4>{name}</h4>
          <p className="text-[#6D7379] text-[14px]">
            {specialty} | {address}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span className="flex items-center gap-1">
              <FaStar className="text-[#F9E000]" /> {rate}
            </span>
            <span className="flex items-center gap-1">
              <CiClock2 />
              <span className="text-sm">{startTime}am </span>-{" "}
              <span className="text-sm">{endTime}pm</span>
            </span>
          </div>
        </div>
      </div>
      {forBooking && (
        <>
          <div className="flex justify-between items-center">
            <span>
              Price<span className="text-sm text-[#6D7379]">/hour</span>
            </span>
            <span className="text-[#FC4B4E]">${price}</span>
          </div>
          <Link to={`/booking/${userId}`}>
            <button className="w-full py-2 cursor-pointer rounded-[10px] bg-[#145DB8] text-white">
              Book appointment
            </button>
          </Link>
        </>
      )}
    </div>
  )
}
