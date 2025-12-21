import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Pen, Star } from "lucide-react";
import doc from "../../assets/doc.jpg";
import ReviewCards from "./ReviewCards";
interface IReview {
  id: number;
  name: string;
  time: string;
  rating: number;
  image: string;
  comment: string;
}
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
  const [rating, setRating] = useState(0); // القيمة المختارة
  const [hover, setHover] = useState(0);
  return (
    <section className="w-full">
      {/* header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[20px] font-medium">Reviews and Rating</h2>
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button className="bg-transparent hover:bg-transparent cursor-pointer text-[#145DB8]">
                <Pen size={16} />
                add review
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader></DialogHeader>
              {/* ===start==== */}
              <div className="grid gap-4">
                <div className="flex justify-between items-center">
                  <Label className="text-[#1A202C] font-semibold text-lg">
                    Your Rate
                  </Label>
                  <span className="text-2xl font-bold text-[#1A202C]">
                    {rating}/5
                  </span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        size={32}
                        className={`transition-colors ${
                          star <= (hover || rating)
                            ? "fill-yellow-400 text-yellow-400" // نجوم مضيئة
                            : "fill-gray-200 text-gray-200" // نجوم مطفأة
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {/* ===review==== */}
                <div className="grid gap-3">
                  <Label htmlFor="username-1">Your review</Label>
                  <Textarea
                    className="resize-none h-50"
                    id="username-1"
                    name="username"
                    placeholder="write your review....."
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit" className="bg-[#145DB8]">
                  Send your review
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
      {/* details */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[40px]">4.5/5</h2>
        <div className="flex flex-col">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`h-5 w-5 ${
                  index < 4
                    ? "fill-[#F9E000] text-yellow-400"
                    : "text-[#F9E00059]"
                }`}
              />
            ))}
          </div>
          <p className="text-[14px] text-[#6D7379]">1250+ Reviews</p>
        </div>
      </div>
      {/* display reviews */}
      <div className="w-full mt-8">
        <ReviewCards reviewData={reviewData} />
      </div>
    </section>
  );
};

export default DoctorReviews;
