import { ArrowLeft } from "lucide-react";
import AppointemntCard from "./AppointmentCard/AppointemntCard";
import DoctorReviews from "./DoctorReviews/DoctorReviews";
import DoctorInfo from "./DoctorInfo/DoctorInfo";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { id } = useParams();
  const doctorId = id ? Number(id) : null;
  return (
    <section className="py-6">
      <div className="max-w-7xl px-[20px] mx-auto">
        {/* title */}
        <h1 className="flex items-center gap-2 mb-4">
          <ArrowLeft size={24} />
          <span>Make an appointment</span>
        </h1>
        <div className="w-full flex items-start justify-between flex-wrap gap-3">
          {/* select time & date */}
          <div className="w-full md:w-[45%] lg:w-[60%]">
            <AppointemntCard doctorId={doctorId} />
            <DoctorReviews doctorId={doctorId} />
          </div>
          <DoctorInfo doctorId={doctorId} />
        </div>
      </div>
    </section>
  );
};

export default Booking;
