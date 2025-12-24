import type { FC } from "react";
import ChangePassword from "./ChangePassword";
import ResetPassword from "./ResetPassword";

const PasswordManagement: FC = () => {
  return (
    <div className="flex justify-center gap-20 items-start w-full">
      <ChangePassword />
      <ResetPassword />
    </div>
  );
};
export default PasswordManagement;
