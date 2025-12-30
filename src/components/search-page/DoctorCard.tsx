import type { Doctor } from "./Types";
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa6"
import { CiClock2 } from "react-icons/ci"
import userImage from "/imgs/user.png"

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm p-4 flex flex-col">
      <div className="flex gap-3">
        <img
          src={userImage}
          alt={doctor.user.name}
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{doctor.user.name}</h3>
          <p className="text-sm text-gray-500">
            {doctor.specialization.name}
          </p>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <span className="flex justify-between gap-1 items-center"><FaStar className="text-yellow-500" /> 4.8</span>
            <span className="flex justify-between gap-1 items-center"><CiClock2 className="text-gray-400" /> 9:30am - 8:00pm</span>
          </div>
        </div>
      </div>


      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-500"><span className="text-lg text-black">Price</span>/hour</span>
        <span className="font-semibold text-red-500">${doctor.session_price}</span>
      </div>


      <Link to={`/booking/${doctor.id}`}> <button className="mt-4 w-full rounded-xl bg-primary py-2 text-white font-medium transition cursor-pointer">
        Book appointment
      </button> </Link>
    </div>
  );
}

