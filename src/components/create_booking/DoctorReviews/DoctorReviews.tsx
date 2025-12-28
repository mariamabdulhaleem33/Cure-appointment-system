import ReviewCards from "./ReviewCards";
import Description from "./Description";
type IProps = {
  doctorId: number | null;
};
const DoctorReviews = ({ doctorId }: IProps) => {
  return (
    <section className="w-full mb-5 lg:mb-0">
      <Description doctorId={doctorId} />
      <div className="w-full mt-8">
        <ReviewCards doctorId={doctorId} />
      </div>
    </section>
  );
};

export default DoctorReviews;
