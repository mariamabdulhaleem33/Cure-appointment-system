import { Heart, MessageCircleMore } from "lucide-react";
import doc from "../../../assets/doc1.webp";

import { IoMdCheckmarkCircle } from "react-icons/io";

type IProps = {
  name: string;
  specialty: string;
  photo: string | null;
};
const Header = ({ name, specialty, photo }: IProps) => {
  return (
    <>
      <div className="flex items-start justify-between">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white cursor-pointer">
          <Heart size={24} />
        </button>
        <div className="flex flex-col items-center justify-center">
          <div className="w-28.25 h-28.25 relative">
            <img
              src={photo ? photo : doc}
              alt="doctor image"
              className="w-full h-full rounded-full border border-gray-200 object-cover object-top"
            />
            <IoMdCheckmarkCircle
              size={25}
              className="text-blue-800 absolute bottom-0 right-3.5"
            />
          </div>

          <h2 className="font-normal text-[20px]">{name}</h2>
          <p className="text-[14px] text-[#404448]">{specialty}</p>
        </div>
        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
          <MessageCircleMore size={24} />
        </span>
      </div>
    </>
  );
};

export default Header;
