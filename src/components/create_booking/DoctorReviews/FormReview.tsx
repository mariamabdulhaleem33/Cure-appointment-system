import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { toast } from "sonner";

// ===== Zod schema =====
const reviewSchema = z.object({
  rating: z.number().min(1, "You must select at least one star"),
  review: z.string().min(5, "Review must be at least 5 characters"),
});

// ===== Types =====
type ReviewFormData = z.infer<typeof reviewSchema>;
interface FormReviewProps {
  children: React.ReactNode;
}
const FormReview = ({ children }: FormReviewProps) => {
  const [hover, setHover] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { rating: 0, review: "" },
    mode: "onSubmit",
  });

  const rating = watch("rating");

  const onSubmit = (data: ReviewFormData) => {
    console.log("Form Data:", data);
    toast.success("Review submitted successfully!", { position: "top-center" });
    reset();
  };

  return (
    // <div className="flex flex-col gap-3 mb-5">
    //   <div className="flex items-center justify-between">
    <>
        {/* <h2 className="text-[17px] md:text-[20px] font-medium">
          Reviews and Rating
        </h2> */}

        <Dialog>
          <DialogTrigger asChild>
            {children}
            {/* <Button className="bg-transparent hover:bg-transparent cursor-pointer text-[#145DB8]">
              <Pen size={16} /> add review
            </Button> */}
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>Add Your Review</DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* ===== Rating ===== */}
              <div className="flex justify-between items-center mt-2">
                <Label className="text-[#1A202C] font-semibold text-lg">
                  Your Rate
                </Label>
                <span className="text-2xl font-bold text-[#1A202C]">
                  {rating}/5
                </span>
              </div>

              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    onClick={() =>
                      setValue("rating", star, { shouldValidate: true })
                    }
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star
                      size={32}
                      className={`transition-colors ${
                        star <= (hover || rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  </button>
                ))}
              </div>
              {errors.rating && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.rating.message}
                </p>
              )}

              {/* ===== Review Text ===== */}
              <div className="grid gap-3 mt-4">
                <Label htmlFor="review">Your review</Label>
                <Textarea
                  {...register("review")}
                  className="resize-none h-50"
                  id="review"
                  placeholder="Write your review..."
                />
                {errors.review && (
                  <p className="text-red-500 text-sm">
                    {errors.review.message}
                  </p>
                )}
              </div>

              {/* ===== Dialog Footer ===== */}
              <DialogFooter className="mt-4 flex justify-end gap-2">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button
                  type="submit"
                  className="bg-[#145DB8]"
                >
                  Send your review
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        </>
    //   {/* </div>
    // </div> */}
  );
};

export default FormReview;
