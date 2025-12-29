import React, { useState, useRef, useEffect } from "react";
import { User } from "lucide-react";
import DropDown from "../../profile-popup/DropDown";
import SignInSignUpDropdown from "../../profile-popup/SignInSignUpDropdown";
import { useMediaQuery } from "@/hooks/useMatchMediaQuery";
import { useAuthState, useLogout } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";

const UserMenu: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [imageError, setImageError] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isLargeScreen } = useMediaQuery("(min-width: 768px)");
  const { isAuthenticated } = useAuthState();
  const logout = useLogout();
  const { user } = useProfile();

  const handleLogout = () => {
    setShowDropdown(false);
    logout();
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
            overflow-hidden
          "
          aria-label="Open user menu"
          aria-expanded={showDropdown}
          aria-haspopup="true"
        >
          {isAuthenticated ? (
            user.avatarUrl && !imageError ? (
              <img
                key={user.avatarUrl}
                src={user.avatarUrl}
                alt={`${user.name}'s profile`}
                className="w-full h-full object-cover rounded-full"
                onError={() => {
                  setImageError(true);
                }}
                onLoad={() => {
                  setImageError(false);
                }}
              />
            ) : (
              <User className="w-5 h-5 text-gray-600" />
            )
          ) : (
            <User className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {/* Desktop Dropdown */}
        {showDropdown && (
          <div className="hidden md:block absolute right-0 top-12 z-50">
            {isAuthenticated ? (
              <DropDown
                user={user}
                onLogout={handleLogout}
                onClose={handleClose}
              />
            ) : (
              <SignInSignUpDropdown onClose={handleClose} />
            )}
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
            {isAuthenticated ? (
              <DropDown
                user={user}
                onLogout={handleLogout}
                onClose={handleClose}
              />
            ) : (
              <SignInSignUpDropdown onClose={handleClose} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UserMenu;
