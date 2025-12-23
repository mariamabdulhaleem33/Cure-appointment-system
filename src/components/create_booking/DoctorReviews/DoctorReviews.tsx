import doc from "../../../assets/doc.jpg";
import ReviewCards from "./ReviewCards";
import type { IReview } from "../types";
import FormReview from "./FormReview";
import Description from "./Description";

const DoctorReviews = () => {
  const reviewData: IReview[] = [
    {
      id: 1,
      name: "Nabila Reyna",
      time: "30 min ago",
      rating: 4.5,
      image: doc,
      comment:
        "Excellent service! Dr. Jessica Turner was attentive and thorough. The clinic was clean, and the staff were friendly. Highly recommend for in-person care!",
    },
    {
      id: 2,
      name: "Ferry Ichsan A",
      time: "A week ago",
      rating: 4.5,
      image: doc,
      comment:
        "Quick and easy appointment! Dr. Jessica Turner was professional, and the staff made me feel comfortable. Highly recommend!",
    },
    {
      id: 3,
      name: "Sarah Ahmed",
      time: "2 days ago",
      rating: 5.0,
      image: doc,
      comment:
        "Very professional and kind. The wait time was minimal and the care was top-notch.",
    },
  ];

  return (
    <section className="w-full">
      {/* Form Review */}
      <FormReview />
      {/* Description */}
      <Description />
      {/* display reviews */}
      <div className="w-full mt-8">
        <ReviewCards reviewData={reviewData} />
      </div>
    </section>
  );
};

export default DoctorReviews;
