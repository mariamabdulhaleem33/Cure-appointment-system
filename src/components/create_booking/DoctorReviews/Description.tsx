import { Star } from "lucide-react";
import { useDoctor } from "../hooks/useDoctor";
type IProps = {
  doctorId: number | null;
};
const Description = ({ doctorId }: IProps) => {
  const token: string | null = localStorage.getItem("authToken");
  const { data: doctorInfo } = useDoctor(doctorId, token);
  return (
    <>
      <div className="flex items-center justify-between mb-5 px-3">
        <h2 className="text-[25px] md:text-[40px]">
          {Number(doctorInfo?.average_rating || 0).toFixed(1)}/5
        </h2>
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
          <p className="text-[14px] text-[#6D7379]">
            {Number(doctorInfo?.reviews_count) || 0}+ Reviews
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
