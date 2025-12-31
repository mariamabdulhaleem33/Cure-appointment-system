import { useAuthState } from "@/hooks/useAuth";
import React from "react";
import { Link } from "react-router-dom";

const styles =
  "cursor-pointer px-6 py-3 text-sm font-medium rounded-xl transition";

const HeroActions: React.FC = () => {
  const { isAuthenticated } = useAuthState();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
      {/* Primary button */}
      <Link to={`${isAuthenticated ? "" : "/login"}`}>
        <button
          className={`${styles}
      bg-blue-600
      text-white
      hover:bg-blue-700 
      `}
        >
          Get started
        </button>
      </Link>

      {/* Secondary button */}
      <Link to={"/Search"}>
        <button
          className={` ${styles} 
      border border-gray-200
      bg-white
      text-gray-700
      flex items-center gap-2
      hover:bg-gray-50 
      `}
        >
          Book Appointment
        </button>
      </Link>
    </div>
  );
};

export default HeroActions;
