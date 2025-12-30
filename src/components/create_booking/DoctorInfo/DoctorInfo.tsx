import Location from "./Location";
import Description from "./Description";
import Details from "./Details";
import Header from "./Header";
import { useDoctor } from "../hooks/useDoctor";
import { useDoctorReviews } from "../hooks/useReview";
import DoctorCardSkeleton from "../Skelton/DoctorCardSkeleton";

type IProps = {
  doctorId: number | null;
};
const DoctorInfo = ({ doctorId }: IProps) => {

const token: string | null = localStorage.getItem("authToken");
  const { data: doctorReviews = [] } = useDoctorReviews(doctorId, token);
  const docReviews = doctorReviews?.data?.doctor;
  const { data: doctorInfo, isLoading } = useDoctor(doctorId, token);
  if (isLoading) {
    return <DoctorCardSkeleton />;
  }
  return (
    <section className="w-full md:w-[45%] lg:w-[37%] min-h-188.25 bg-[#F5F6F7] rounded-[19px] px-5 pt-8 pb-6 flex flex-col justify-between">
      <Header
        name={doctorInfo?.user?.name}
        specialty={doctorInfo?.specialization}
        photo={doctorInfo?.profile_photo}
        doctorId={doctorId}
      />
       <Details
      experience={6}
      patientCount={300}
      reviewsCount={docReviews?.total_reviews}
      rating_avg={docReviews?.average_rating}
       /> 
      
      <Details
        experience={Number(doctorInfo?.experience_years) || 0}
        patientCount={Number(doctorInfo?.patients_count) || 0}
        reviewsCount={Number(doctorInfo?.reviews_count) || 0}
        rating_avg={Number(doctorInfo?.average_rating) || 0}
      />
      <Description about_me={doctorInfo?.about_me} />
      <Location
        latitude={doctorInfo?.clinic_location?.lat}
        longitude={doctorInfo?.clinic_location?.lng}
      />
    </section>
  );
};

export default DoctorInfo;
