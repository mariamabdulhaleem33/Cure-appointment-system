import ProfileSidebar from "@/components/Profile/ProfileSidebar/ProfileSidebar";
import type { FC } from "react";
import { Outlet } from "react-router-dom";

const Profile: FC = () => {
  return (
    <div className="h-screen flex gap-20 py-10 max-w-7xl mx-auto px-10">
      <div className="w-1/3 h-full">
        <ProfileSidebar />
      </div>
      <div className="w-2/3 h-full">
        <Outlet />
      </div>
    </div>
  );
};
export default Profile;
