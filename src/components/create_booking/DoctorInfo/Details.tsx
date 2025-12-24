import { Award, MessageSquareText, Star, UsersRound } from "lucide-react";
const Details = () => {
  const details = [
    { icon: <UsersRound size={25} />, number: "2,000+", title: "patient" },
    { icon: <Award size={25} />, number: "10+", title: "experience" },
    { icon: <Star size={25} />, number: "4.5", title: "rating" },
    {
      icon: <MessageSquareText size={25} />,
      number: "1872",
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
