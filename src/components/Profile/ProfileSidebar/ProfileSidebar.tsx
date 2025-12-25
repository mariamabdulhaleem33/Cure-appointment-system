import type { FC } from "react";
import { LockKeyhole, LogOut, User } from "lucide-react";
import UserProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileNavItem from "./ProfileNavlink";

const NavItemData = [
  {
    to: "/profile/edit",
    text: "Personal information",
    child: <User className="w-5 h-5 text-slate-900" />,
  },
  {
    to: "/profile/password_management",
    text: "Password management",
    child: <LockKeyhole className="w-5 h-5 text-slate-900" />,
  },
];

const ProfileSidebar: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F5F6F7] h-full rounded-xl gap-10">
      <UserProfileHeader />

      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center w-full gap-2">
          {NavItemData.map((el, index) => (
            <ProfileNavItem
              key={index}
              to={el.to}
              text={el.text}
              children={el.child}
            />
          ))}

          <div className="cursor-pointer w-3/4 flex justify-start items-center gap-2 px-6 py-4 border-2 border-transparent ">
            <LogOut className="w-5 h-5 text-red-500" />
            <span className="text-red-500 text-md">Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
