import React, { useState, useRef, useEffect } from "react";
import { User } from "lucide-react";
import DropDown from "../../profile-popup/DropDown";
import { UserProfile } from "@/assets";
import { useMediaQuery } from "@/hooks/useMatchMediaQuery";

const UserMenu: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isLargeScreen } = useMediaQuery("(min-width: 768px)");

  // Mock data for user
  const mockUser = {
    name: "Seif Mohamed",
    address: "129,El-Nasr Street, Cairo",
    avatarUrl: UserProfile,
  };

  const handleLogout = () => {
    console.log("Logout clicked!");
    setShowDropdown(false);
  };

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLargeScreen) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setShowDropdown(false);
        }
      }
    };

    if (showDropdown && isLargeScreen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown, isLargeScreen]);

  const handleClose = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setShowDropdown(!showDropdown);
            }
          }}
          className="
            w-9 h-9
            flex items-center justify-center
            rounded-full
            hover:bg-gray-100
            cursor-pointer
            transition-colors
          "
          aria-label="Open user menu"
          aria-expanded={showDropdown}
          aria-haspopup="true"
        >
          <User className="w-5 h-5 text-gray-600" />
        </button>

        {/* Desktop Dropdown */}
        {showDropdown && (
          <div className="hidden md:block absolute right-0 top-12 z-50">
            <DropDown
              user={mockUser}
              onLogout={handleLogout}
              onClose={handleClose}
            />
          </div>
        )}
      </div>

      {/* Mobile Modal */}
      {showDropdown && (
        <div className="md:hidden fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={handleClose} />
          <div
            className="relative w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <DropDown
              user={mockUser}
              onLogout={handleLogout}
              onClose={handleClose}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default UserMenu;
