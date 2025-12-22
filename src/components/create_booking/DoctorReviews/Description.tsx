import { Star } from "lucide-react";

const Description = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[25px] md:text-[40px]">4.5/5</h2>
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
    </>
  );
};

export default Description;
