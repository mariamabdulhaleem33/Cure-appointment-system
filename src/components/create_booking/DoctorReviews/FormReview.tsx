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
const FormReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[17px] md:text-[20px] font-medium">
          Reviews and Rating
        </h2>
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
    </>
  );
};

export default FormReview;
