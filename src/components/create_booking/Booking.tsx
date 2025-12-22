import { ArrowLeft } from "lucide-react";
import AppointemntCard from "./AppointemntCard";
import DoctorInfo from "./DoctorInfo";
import DoctorReviews from "./DoctorReviews";

const Booking = () => {
  return (
    <section className="py-6">
      <div className="app-container">
        {/* title */}
        <h1 className="flex items-center gap-2 mb-4">
          <ArrowLeft size={24} />
          <span>Make an appointment</span>
        </h1>
        <div className="flex items-start flex-wrap gap-8">
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
