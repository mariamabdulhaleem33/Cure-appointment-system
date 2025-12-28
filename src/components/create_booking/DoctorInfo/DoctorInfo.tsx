import Location from "./Location";
import Description from "./Description";
import Details from "./Details";
import Header from "./Header";
import { useDoctor } from "../hooks/useDoctor";
type IProps = {
  doctorId: number | null;
};
const DoctorInfo = ({ doctorId }: IProps) => {
  const token: string | null = localStorage.getItem("authToken");
  const { data: doctorInfo } = useDoctor(doctorId, token);
  return (
    <section className="w-full md:w-[45%] lg:w-[37%] h-[753px] bg-[#F5F6F7] rounded-[19px] px-5 pt-8 pb-6 flex flex-col justify-between">
      <Header
        name={doctorInfo?.name}
        specialty={doctorInfo?.specialty.name}
        photo={doctorInfo?.profile_photo}
      />
      <Details
        experience={doctorInfo?.experience_years}
        patientCount={doctorInfo?.patient_count}
        reviewsCount={doctorInfo?.reviews_count}
        rating_avg={doctorInfo?.rating_avg}
      />
      <Description about_me={doctorInfo?.about_me} />
      <Location
        latitude={doctorInfo?.location?.latitude}
        longitude={doctorInfo?.location?.longitude}
      />
    </section>
  );
};

export default DoctorInfo;
