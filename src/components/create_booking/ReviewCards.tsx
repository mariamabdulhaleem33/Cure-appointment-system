import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
interface IReview {
  id: number;
  name: string;
  time: string;
  rating: number;
  image: string;
  comment: string;
}
interface ReviewCardsProps {
  reviewData: IReview[];
}
const ReviewCards = ({ reviewData }: ReviewCardsProps) => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {reviewData.map((review) => (
            <CarouselItem key={review.id} className="pl-4 md:basis-1/2">
              <Card className="rounded-[19px] border-[#BBC1C7] shadow-sm h-full">
                <CardContent className="px-6">
                  {/* Header: Photo, Name, Rating */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-3">
                      <Avatar className="h-12 w-12 border">
                        <AvatarImage src={review.image} />
                        <AvatarFallback>{review.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <h4 className="font-bold text-[#1A202C] text-sm">
                          {review.name}
                        </h4>
                        <span className="text-xs text-gray-400">
                          {review.time}
                        </span>
                      </div>
                    </div>
                    {/* Rating Badge */}
                    <div className="bg-[#FFFBEB] px-2 py-1 rounded-lg flex items-center gap-1 border border-[#FEF3C7]">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-bold text-[#D97706]">
                        {review.rating}
                      </span>
                    </div>
                  </div>
                  {/* Comment */}
                  <p className="text-sm text-[#4A5568] leading-relaxed line-clamp-4">
                    {review.comment}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* The arrows of carousel */}
        <div className="hidden md:block">
          <CarouselPrevious className="-left-0 border-[#BBC1C7]" />
          <CarouselNext className="-right-0 border-[#BBC1C7]" />
        </div>
      </Carousel>
    </>
  );
};

export default ReviewCards;
