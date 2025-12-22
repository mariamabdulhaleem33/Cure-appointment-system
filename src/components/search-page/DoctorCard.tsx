import type { Doctor } from "./Types";
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa6"
import { CiClock2 } from "react-icons/ci"

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm p-4 flex flex-col">
      <div className="flex gap-3">
        <img
          src={doctor.profile_photo}
          alt={doctor.name}
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
          <p className="text-sm text-gray-500">
            {doctor.specialty.name}
          </p>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <span className="text-yellow-500"><FaStar /> {doctor.rating}</span>
            <span className="text-gray-400"><CiClock2 /> {doctor.time}</span>
          </div>
        </div>
      </div>


      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-500">Price/hour</span>
        <span className="font-semibold text-red-500">${doctor.session_price}</span>
      </div>


      <Link to='/'> <button className="mt-4 w-full rounded-xl bg-blue-600 py-2 text-white font-medium hover:bg-blue-700 transition cursor-pointer">
        Book appointment
      </button> </Link>
    </div>
  );
}

