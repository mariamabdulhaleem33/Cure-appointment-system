import { useState } from "react";
type IProps = {
  about_me: string;
};
const Description = ({ about_me }: IProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div>
        <h2 className="text-[20px] mb-1">About me</h2>
        <div
          className={`relative transition-[max-height] duration-500 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-250" : "max-h-10.5"
          }`}
        >
          <p className="text-[14px] text-[#404448] leading-5.25 text-justify">
            {about_me}
          </p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#145DB8] text-[14px] font-semibold mt-1 block hover:underline cursor-pointer"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>
    </>
  );
};

export default Description;
