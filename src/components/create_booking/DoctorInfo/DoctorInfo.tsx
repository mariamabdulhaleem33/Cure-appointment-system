import Location from "./Location";
import Description from "./Description";
import Details from "./Details";
import Header from "./Header";
import { useDoctor } from "../hooks/useDoctor";
import { useDoctorReviews } from "../hooks/useReview";
type IProps = {
  doctorId: number | null;
};
const DoctorInfo = ({ doctorId }: IProps) => {
  const token: string | null =
    localStorage.getItem("authToken") ??
    "11|4oTir7nbTiTxizu8G2jkbM53dTIUyNtHjH89F64L50c6c158";
  const { data: doctorInfo } = useDoctor(doctorId, token);
  const { data: doctorReviews = [] } = useDoctorReviews(doctorId, token);
  const docReviews = doctorReviews?.data?.doctor;
  return (
    <section className="w-full md:w-[45%] lg:w-[37%] h-[753px] bg-[#F5F6F7] rounded-[19px] px-5 pt-8 pb-6 flex flex-col justify-between">
      <Header
        name={doctorInfo?.user?.name}
        specialty={doctorInfo?.specialization}
        photo={doctorInfo?.profile_photo}
      />
      <Details
        experience={6}
        patientCount={300}
        reviewsCount={docReviews?.total_reviews}
        rating_avg={docReviews?.average_rating}
      />
      <Description
        about_me={
          "Dr. [Name] is a highly skilled specialist with over 6 years of experience in [Specialty]"
        }
      />
      <Location
        latitude={doctorInfo?.clinic_location?.lat}
        longitude={doctorInfo?.clinic_location?.lng}
      />
    </section>
  );
};

export default DoctorInfo;
