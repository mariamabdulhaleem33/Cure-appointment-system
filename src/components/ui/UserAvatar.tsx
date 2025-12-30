import { useState } from "react";
import { Loader2 } from "lucide-react";
import { getInitials } from "@/utils/getInitials";

interface UserAvatarProps {
  avatarUrl: string | null;
  name: string;
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "w-9 h-9 text-sm",
  md: "h-14 w-14 text-lg",
  lg: "w-20 h-20 text-xl",
};

const loaderSizes = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

export const UserAvatar: React.FC<UserAvatarProps> = ({
  avatarUrl,
  name,
  size = "md",
  isLoading: externalLoading,
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(!!avatarUrl);

  if (externalLoading) {
    return (
      <div
        className={`${sizeClasses[size]} rounded-full bg-gray-100 flex items-center justify-center ${className}`}
      >
        <Loader2
          className={`${loaderSizes[size]} text-gray-400 animate-spin`}
        />
      </div>
    );
  }

  if (avatarUrl && !imageError) {
    return (
      <div
        className={`${sizeClasses[size]} rounded-full bg-gray-100 flex items-center justify-center relative overflow-hidden ${className}`}
      >
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
            <Loader2
              className={`${loaderSizes[size]} text-gray-400 animate-spin`}
            />
          </div>
        )}
        <img
          key={avatarUrl}
          src={avatarUrl}
          alt={`${name}'s profile`}
          className={`${
            sizeClasses[size]
          } object-cover rounded-full transition-opacity ${
            imageLoading ? "opacity-0" : "opacity-100"
          }`}
          onError={() => {
            setImageError(true);
            setImageLoading(false);
          }}
          onLoad={() => {
            setImageLoading(false);
            setImageError(false);
          }}
          ref={(img) => {
            if (img) {
              if (img.complete) {
                setImageLoading(false);
                setImageError(false);
              } else {
                setImageLoading(true);
                setImageError(false);
              }
            }
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-[#145DB8] flex items-center justify-center ${className}`}
    >
      <span className="text-white font-semibold">
        {getInitials(name || "User")}
      </span>
    </div>
  );
};
