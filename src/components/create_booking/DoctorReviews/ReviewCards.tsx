import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useDoctorReviews } from "../hooks/useReview";
import type { IReview } from "../types";
import ReviewSkeleton from "../Skelton/ReviewSkeleton";
import CardReview from "./CardReview";

interface ReviewCardsProps {
  doctorId: number | null;
}
const ReviewCards = ({ doctorId }: ReviewCardsProps) => {
  const token: string | null = localStorage.getItem("authToken");
  const { data: doctorReviews, isLoading } = useDoctorReviews(doctorId, token);
  const allReviews: IReview[] = (doctorReviews?.data?.reviews?.data ||
    []) as IReview[];
  //==========================
  // ==== Display Skeleton ===
  // =========================
  if (isLoading) {
    return (
      <div className="w-full py-6">
        <div className="flex overflow-hidden">
          <ReviewSkeleton />
          <ReviewSkeleton />
        </div>
      </div>
    );
  }
  return (
    <>
      {allReviews.length > 0 ? (
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {allReviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="pl-4 md:basis-1/2 lg:basis-1/2"
              >
                <CardReview
                  profilePhoto={review?.user?.profile_photo}
                  name={review?.user?.name}
                  createdAt={review.created_at}
                  comment={review.comment}
                  rating={review.rating}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center items-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 border-[#BBC1C7] bg-white hover:bg-gray-50 h-10 w-10" />
            <CarouselNext className="static translate-y-0 border-[#BBC1C7] bg-white hover:bg-gray-50 h-10 w-10" />
          </div>
        </Carousel>
      ) : (
        <div className="w-full px-6 py-12 text-center border-2 border-dashed border-[#BBC1C7] rounded-4xl text-gray-400">
          <p className="text-sm">
            There are no reviews available for this doctor yet.
          </p>
        </div>
      )}
    </>
  );
};

export default ReviewCards;
