import type { FC } from "react";
import { LockKeyhole, LogOut, User } from "lucide-react";
import UserProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileNavItem from "./ProfileNavlink";
import { useLogout } from "@/hooks/useAuth";

const NavItemData = [
  {
    to: "/profile/edit",
    text: "Personal information",
    child: <User className="w-4 h-4 text-slate-900 xl:w-5 xl:h-5" />,
  },
  {
    to: "/profile/change-password",
    text: "Password management",
    child: <LockKeyhole className="w-4 h-4 text-slate-900 xl:w-5 xl:h-5" />,
  },
];

const ProfileSidebar: FC = () => {
  const logout = useLogout();
  return (
    <div className="flex flex-col h-full justify-center items-center bg-[#F5F6F7] py-10 rounded-xl gap-12">
      <UserProfileHeader />

      <div className="flex flex-col justify-center items-center w-full">
        <div className="px-10 lg:p-0 flex justify-center lg:justify-between items-center w-full gap-2 flex-col">
          {NavItemData.map((el, index) => (
            <ProfileNavItem
              key={index}
              to={el.to}
              text={el.text}
              children={el.child}
            />
          ))}

          <div onClick={logout}className="cursor-pointer w-full md:w-3/4 flex justify-start items-center gap-2 px-3 py-4 border-2 border-transparent ">
            <LogOut className="w-4 h-4 text-red-500 xl:w-5 xl:h-5" />
            <span className="text-red-500 text-xs md:text-sm xl:text-lg">Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
