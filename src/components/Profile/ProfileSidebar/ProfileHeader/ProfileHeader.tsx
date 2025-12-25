import { UserProfile } from "@/assets";
import { MapPin } from "lucide-react";
import { type FC } from "react";
import ProfileImg from "../../../ui/ProfileImage";

const UserProfileHeader: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <ProfileImg src={UserProfile} editable={true} style={`w-32 h-32`} />
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <h4 className="font-secondary text-slate-900 text-2xl">
          Seif Mohammed
        </h4>
        <p className="text-neutral-500 text-sm flex items-center gap-1">
          <MapPin className="w-4 h-4 text-neutral-500" />
          129, El-Nasr Street, Cairo
        </p>
      </div>
    </div>
  );
};

export default UserProfileHeader;
