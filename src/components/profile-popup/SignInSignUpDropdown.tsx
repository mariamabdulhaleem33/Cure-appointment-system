import React from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, UserPlus } from "lucide-react";
import styles from "./DropDown.module.css";
import { CLOSE_BUTTON } from "./constants";

type SignInSignUpDropdownProps = {
  onClose?: () => void;
};

const SignInSignUpDropdown: React.FC<SignInSignUpDropdownProps> = ({
  onClose,
}) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
    if (onClose) {
      onClose();
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={`
        relative
        w-full h-full
        md:w-[358px] md:rounded-[20px]
        bg-white md:bg-[#F5F6F7]
        flex flex-col
        shadow-xl
        overflow-visible
        ${styles.profileDropdownMobile} ${styles.compact}
      `}
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-label="Sign in or sign up menu"
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
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      <ul
        className={`flex flex-col overflow-visible ${styles.profileMenuMobile} md:flex-initial md:py-2`}
        role="menu"
        aria-label="Authentication options"
      >
        <li
          onClick={handleSignIn}
          className="flex items-center px-2 py-2 gap-3 text-gray-700 cursor-pointer hover:bg-gray-200 rounded-lg transition-colors min-h-[44px]"
          role="menuitem"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleSignIn();
            }
          }}
          aria-label="Sign in"
        >
          <LogIn className="w-6 h-6 flex-shrink-0" />
          <span className="font-montserrat text-button font-normal">
            Sign In
          </span>
        </li>
        <li
          onClick={handleSignUp}
          className="flex items-center px-2 py-2 gap-3 text-gray-700 cursor-pointer hover:bg-gray-200 rounded-lg transition-colors min-h-[44px]"
          role="menuitem"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleSignUp();
            }
          }}
          aria-label="Sign up"
        >
          <UserPlus className="w-6 h-6 flex-shrink-0" />
          <span className="font-montserrat text-button font-normal">
            Sign Up
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SignInSignUpDropdown;

