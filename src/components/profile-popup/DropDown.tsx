import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { User } from "lucide-react";
import { DropdownItem } from "./DropDownItem";
import {
  PaymentIcon,
  LocationIcon,
  LogoutIcon,
  SettingsIcon,
  SecurityIcon,
  FavoriteIcon,
  CloseIcon,
} from "./icons";
import type { DropdownProps } from "./types";
import styles from "./DropDown.module.css";
import { CLOSE_BUTTON, ICON_SIZES, TYPOGRAPHY } from "./constants";

const SettingsHeaderIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => <SettingsIcon className={`${className} text-[#145DB8]`} />;

const Dropdown = ({ user, onLogout, onClose }: DropdownProps) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handlePaymentClick = () => {
    console.log("Payment Method clicked");
  };

  const handleFavoriteClick = () => {
    console.log("Favorite clicked");
  };

  const handleSettingsClick = () => {
    navigate("/profile/edit");
    if (onClose) {
      onClose();
    }
  };

  const handlePrivacyClick = () => {
    console.log("Privacy Policy clicked");
  };

  return (
    <div
      className={`
        relative
        w-full h-full
        md:w-[358px] md:min-h-[396px] md:rounded-[20px]
        bg-white md:bg-[#F5F6F7]
        flex flex-col
        shadow-xl
        overflow-visible
        ${styles.profileDropdownMobile}
      `}
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-label="User profile menu"
    >
      {/* Close button for mobile */}
      {onClose && (
        <div
          className="md:hidden flex justify-end mb-2"
          style={{ gap: `${CLOSE_BUTTON.gap}px` }}
        >
          <button
            onClick={onClose}
            className="flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
            style={{
              width: `${CLOSE_BUTTON.width}px`,
              height: `${CLOSE_BUTTON.height}px`,
              borderRadius: `${CLOSE_BUTTON.borderRadius}px`,
              padding: `${CLOSE_BUTTON.padding}px`,
              backgroundColor: CLOSE_BUTTON.backgroundColor,
            }}
            aria-label="Close profile menu"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-4 pb-4">
        {user.avatarUrl && !imageError ? (
          <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img
              key={user.avatarUrl}
              src={user.avatarUrl}
              alt={`${user.name}'s profile picture`}
              className="h-full w-full object-cover"
              onError={() => {
                setImageError(true);
              }}
              onLoad={() => {
                setImageError(false);
              }}
            />
          </div>
        ) : (
          <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <User className="w-7 h-7 text-gray-600" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className={TYPOGRAPHY.username}>{user.name || "User"}</p>
          <div className="flex items-center gap-1.5 mt-1">
            <LocationIcon className="w-3.5 h-3.5 flex-shrink-0" />
            <p className={TYPOGRAPHY.address}>
              {user.address || "(No location has provided)"}
            </p>
          </div>
        </div>
        <button
          onClick={handleSettingsClick}
          className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
          style={{
            width: `${ICON_SIZES.header.width}px`,
            height: `${ICON_SIZES.header.height}px`,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            background: "none",
            border: "none",
            padding: 0,
          }}
          aria-label="Go to settings"
        >
          <SettingsHeaderIcon className="w-5 h-5" />
        </button>
      </div>
      <ul
        className={`flex flex-col flex-1 overflow-visible ${styles.profileMenuMobile}`}
        role="menu"
        aria-label="Profile menu options"
      >
        <DropdownItem
          icon={<PaymentIcon className="w-6 h-6" />}
          label="Payment Method"
          onClick={handlePaymentClick}
        />
        <DropdownItem
          icon={<FavoriteIcon className="w-6 h-6" />}
          label="Favorite"
          onClick={handleFavoriteClick}
        />
        <DropdownItem
          icon={<SettingsIcon className="w-6 h-6" />}
          label="Settings"
          onClick={handleSettingsClick}
        />
        <DropdownItem
          icon={<SecurityIcon className="w-6 h-6" />}
          label="Privacy Policy"
          onClick={handlePrivacyClick}
        />
        <li
          onClick={onLogout}
          className="flex items-center px-2 py-2 gap-3 text-red-500 cursor-pointer pt-2 hover:bg-gray-200 rounded-lg transition-colors"
          role="menuitem"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onLogout();
            }
          }}
          aria-label="Log out"
        >
          <LogoutIcon className="w-6 h-6" />
          <span className="font-montserrat text-button font-normal">
            Log out
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
