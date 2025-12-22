import {
  FiCreditCard,
  FiHeart,
  FiLock,
  FiLogOut,
  FiMapPin,
  FiSettings,
} from "react-icons/fi";
import { DropdownItem } from "./DropDownItem";

type UserProfile = {
  name: string;
  address: string;
  avatarUrl: string;
};

const typography = {
  menu: "font-montserrat text-button text-text-secondary font-normal",
  username: "font-georgia text-subheading text-text-secondary font-normal",
  address:
    "font-montserrat text-small-caption text-text-neutral-darker font-normal",
} as const;

type Props = {
  user: UserProfile;
  onLogout: () => void;
};

const Dropdown = ({ user, onLogout }: Props) => {
  return (
    <div
      className="shadow-xl"
      style={{
        width: "358px",
        minHeight: "396px",
        borderRadius: "20px",
        padding: "16px",
        backgroundColor: "#F5F6F7",
      }}
    >
      <div className="flex items-center gap-4 pb-4 ">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className={typography.username}>{user.name}</p>

          <div className="flex items-center gap-1.5 mt-1">
            <FiMapPin className="w-3.5 h-3.5 text-text-neutral-darker" />
            <p className={typography.address}>{user.address}</p>
          </div>
        </div>
        <FiSettings className="w-6 h-6 text-[#145DB8]" />
      </div>
      <ul className="mt-4 flex flex-col gap-4">
        <DropdownItem
          icon={<FiCreditCard className="w-6 h-6" />}
          label="Payment Method"
          onClick={() => {}}
        />
        <DropdownItem
          icon={<FiHeart className="w-6 h-6" />}
          label="Favorite"
          onClick={() => {}}
        />
        <DropdownItem
          icon={<FiSettings className="w-6 h-6" />}
          label="Settings"
          onClick={() => {}}
        />
        <DropdownItem
          icon={<FiLock className="w-6 h-6" />}
          label="Privacy Policy"
          onClick={() => {}}
        />
        <li
          onClick={onLogout}
          className="flex items-center px-2 py-2 gap-3 text-red-500 cursor-pointer pt-2"
        >
          <FiLogOut className="w-6 h-6" />
          <span className="font-montserrat text-button font-normal">
            Log out
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
