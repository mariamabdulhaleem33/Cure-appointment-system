import { NavLink } from "react-router-dom";
import type { FC } from "react";
import type { NavlinkProps } from "@/Types/Profile.types";

const ProfileNavItem: FC<NavlinkProps> = ({ to, children, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `w-3/4 flex justify-start items-center gap-2 px-6 py-4 rounded-md transition-all ${
          isActive ? `border-2 border-sky-700` : `border-2 border-transparent`
        }`
      }
    >
      {children}
      <span className="text-slate-900 text-md">{text}</span>
    </NavLink>
  );
};

export default ProfileNavItem;
