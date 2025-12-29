import ProfileSidebar from "@/components/Profile/ProfileSidebar/ProfileSidebar";
import type { FC } from "react";
import { Outlet } from "react-router-dom";

const Profile: FC = () => {
  return (
    <div className="flex flex-col items-center lg:items-start py-10 w-full mx-auto gap-15 max-w-7xl  px-10  lg:flex-row">
      <div className="h-full w-full md:w-2/3 lg:w-1/3 ">
        <ProfileSidebar />
      </div>
      <div className="w-full lg:w-2/3 h-full">
        <Outlet/>
      </div>
    </div>
  );
};
export default Profile;
