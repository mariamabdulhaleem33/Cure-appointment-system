import React, { useState } from "react";
import { Star } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ReviewCard: React.FC = () => {
  const [rating, setRating] = useState<number>(1);
  const [review, setReview] = useState<string>("");
  const maxRating = 5;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-[440px] bg-white p-8 rounded-3xl shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#1A2B42] text-[18px] font-serif font-medium">
              Your Rate
            </h2>
            <div className="flex gap-1">
              {[...Array(maxRating)].map((_, i) => {
                const starValue = i + 1;
                return (
                  <button
                    key={i}
                    onClick={() => setRating(starValue)}
                    className="cursor-pointer transition-transform active:scale-90"
                    type="button"
                  >
                    <Star
                      size={32}
                      className={cn(
                        "fill-current transition-colors",
                        starValue <= rating
                          ? "text-[#FFD700]"
                          : "text-[#CBD5E1]"
                      )}
                      strokeWidth={0}
                    />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="text-[#1A2B42] text-[48px] font-serif font-light leading-none">
            {rating}/{maxRating}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[#1A2B42] text-[18px] font-serif font-medium">
            Your review
          </h2>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review"
            className="w-full min-h-[280px] p-4 rounded-2xl border border-[#A0ABC0] text-[#1A2B42] text-[16px] placeholder:text-[#718096] focus:outline-none focus:ring-1 focus:ring-[#1D61BD] resize-none"
          />
        </div>
        <button
          type="button"
          className="w-full mt-8 bg-[#1D61BD] text-white py-4 px-6 rounded-xl text-[18px] font-medium transition-opacity hover:opacity-95 active:opacity-100 cursor-pointer"
        >
          Send your review
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
