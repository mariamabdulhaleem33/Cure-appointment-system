import { ArrowLeft } from "lucide-react";
import AppointemntCard from "./AppointmentCard/AppointemntCard";
import DoctorReviews from "./DoctorReviews/DoctorReviews";
import DoctorInfo from "./DoctorInfo/DoctorInfo";

const Booking = () => {
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
            {/* Choose data & time */}
            <AppointemntCard />
            {/* Display doctor reviews */}
            <DoctorReviews />
          </div>
          {/* Doctor Info */}
          <DoctorInfo />
        </div>
      </div>
    </section>
  );
};

export default Booking;
