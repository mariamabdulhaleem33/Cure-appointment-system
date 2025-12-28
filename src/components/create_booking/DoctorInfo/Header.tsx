import { Heart, MessageCircleMore } from "lucide-react";
import doc from "../../../assets/doc.jpg";
type IProps = {
  name: string;
  specialty: string;
  photo: string | null;
};
const Header = ({ name, specialty, photo }: IProps) => {
  return (
    <>
      <div className="flex items-start justify-between">
        <span className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white">
          <Heart size={24} />
        </span>
        <div className="flex flex-col items-center justify-center">
          <img
            src={photo ? photo : doc}
            alt="doctor image"
            className="w-[113px] h-[113px] rounded-full"
          />
          <h2 className="font-normal text-[20px]">{name}</h2>
          <p className="text-[14px] text-[#404448]">{specialty}</p>
        </div>
        <span className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white">
          <MessageCircleMore size={24} />
        </span>
      </div>
    </>
  );
};

export default Header;
