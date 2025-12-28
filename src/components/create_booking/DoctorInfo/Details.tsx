import { Award, MessageSquareText, Star, UsersRound } from "lucide-react";
type IProps = {
  experience: number;
  patientCount: number;
  reviewsCount: number;
  rating_avg: number;
};
const Details = ({
  experience,
  rating_avg,
  patientCount,
  reviewsCount,
}: IProps) => {
  const details = [
    {
      icon: <UsersRound size={25} />,
      number: `${patientCount}+`,
      title: "patient",
    },
    {
      icon: <Award size={25} />,
      number: `${experience} ${experience > 1 ? "years" : "year"}`,
      title: "experience",
    },
    {
      icon: <Star size={25} />,
      number: `${Number(rating_avg).toFixed(1)}`,
      title: "rating",
    },
    {
      icon: <MessageSquareText size={25} />,
      number: reviewsCount,
      title: "reviews",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        {details.map((detail) => {
          return (
            <div
              key={detail.title}
              className="flex flex-col items-center justify-center"
            >
              <span className="flex items-center justify-center w-[56px] h-[56px] bg-white rounded-full">
                {detail.icon}
              </span>
              <h3 className="font-semibold text-[14px]">{detail.number}</h3>
              <p className="font-normal text-[14px]">{detail.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Details;
