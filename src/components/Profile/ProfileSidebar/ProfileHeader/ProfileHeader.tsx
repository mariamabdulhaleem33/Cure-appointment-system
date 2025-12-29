import { type FC } from "react";
import ProfileImg from "../../../ui/ProfileImage";
import { useShowProfile } from "@/hooks/profile/useShowProfile";
import { LocationIcon } from "@/components/profile-popup/icons";
import { formatLocation } from "@/utils/formatLocation";

const UserProfileHeader: FC = () => {
  const { data } = useShowProfile((data) => ({
    name: data?.name,
    location: formatLocation(data?.location),
    profile_photo_url: data?.profile_photo_url,
  }));

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <ProfileImg
        src={data?.profile_photo_url}
        editable={true}
        style={`w-32 h-32`}
      />
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <h4 className="font-secondary text-slate-900 text-xl xl:text-2xl">
          {data?.name}
        </h4>
        <p className="text-neutral-500 text-sm flex items-center gap-1">
          <LocationIcon className="w-3.5 h-3.5 shrink-0" />
          {data?.location ? data?.location : "Location not set yet"}
        </p>
      </div>
    </div>
  );
};

export default UserProfileHeader;
