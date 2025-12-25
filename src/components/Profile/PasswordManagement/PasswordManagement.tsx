import type { FC } from "react";
import ChangePassword from "./ChangePassword";

const PasswordManagement: FC = () => {
  return (
    <div className="flex justify-center gap-20 items-start w-full">
      <ChangePassword />
    </div>
  );
};
export default PasswordManagement;
