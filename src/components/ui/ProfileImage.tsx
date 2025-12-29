import { useProfileImage } from "@/context/ProfileImgContext";
import type { ProfileImgProps } from "@/Types/Profile.types";
import { Camera, User } from "lucide-react";
import type { FC } from "react";

const ProfileImg: FC<ProfileImgProps> = ({ src, editable, style }) => {
  const { preview, setImage } = useProfileImage();
  const displaySrc = preview || src || "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };
  return (
    <div className="relative">
      <div
        className={`shadow-sm shadow-sky-700 ${style} rounded-full overflow-hidden  flex items-center justify-center`}
      >
        {displaySrc ? (
          <img
            src={displaySrc}
            alt="Profile Img"
            className="w-full h-full object-cover"
          />
        ) : (
          <User className="w-15 h-15 text-slate-900" />
        )}
      </div>
      {editable && (
        <label
          htmlFor="file-picker"
          className="cursor-pointer absolute bottom-0 right-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 shadow-xs shadow-sky-700 hover:bg-gray-300 transition"
        >
          <Camera className="w-5 h-5 text-sky-700" />
          <input
            id="file-picker"
            type="file"
            accept="image/*"
            hidden
            onChange={handleChange}
          />
        </label>
      )}
    </div>
  );
};
export default ProfileImg;
