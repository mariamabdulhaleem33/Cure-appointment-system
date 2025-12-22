import { GiNoseSide } from "react-icons/gi";
import {
  FaTooth,
  FaHeart,
  FaBrain,
  FaUserDoctor,
  FaEye,
  FaLungs,
} from "react-icons/fa6";

type Specialty = {
  name: string;
  icon: React.ReactNode;
};

const specialties: Specialty[] = [
  { name: "Dentist", icon: <FaTooth /> },
  { name: "Cardiologist", icon: <FaHeart /> },
  { name: "ENT", icon: <GiNoseSide /> },
  { name: "Neurologist", icon: <FaBrain /> },
  { name: "General Practitioner", icon: <FaUserDoctor /> },
  { name: "Ophthalmologist", icon: <FaEye /> },
  { name: "Pulmonologist", icon: <FaLungs /> },
];

export default function Specialties() {
  return (
    <div>
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {specialties.map((item) => (
          <button
            key={item.name}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm text-gray-600 hover:border-blue-500 hover:bg-blue-50 transition cursor-pointer"
          >
            <span className="">{item.icon}</span>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}