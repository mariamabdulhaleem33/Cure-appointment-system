import type { FC } from "react";
import { LockKeyhole, LogOut, User } from "lucide-react";
import UserProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileNavItem from "./ProfileNavlink";

const ProfileSidebar: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F5F6F7] h-full rounded-xl gap-10">
      <UserProfileHeader />

      <div className="flex flex-col justify-center items-center w-full">
        <ul className="flex flex-col justify-center items-center w-full gap-2">
          <ProfileNavItem to="/profile/edit" text={"Personal information"}>
            <User className="w-5 h-5 text-slate-900" />
          </ProfileNavItem>

          <ProfileNavItem to="/profile/password" text={"Password management"}>
            <LockKeyhole className="w-5 h-5 text-slate-900" />
          </ProfileNavItem>

          <li className="cursor-pointer w-3/4 flex justify-start items-center gap-2 px-6 py-4 border-2 border-transparent ">
            <LogOut className="w-5 h-5 text-red-500" />
            <span className="text-red-500 text-md">Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
