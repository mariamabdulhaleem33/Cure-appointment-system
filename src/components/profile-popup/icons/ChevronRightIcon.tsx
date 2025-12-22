import React from "react";

export const ChevronRightIcon: React.FC<{ 
  className?: string;
  style?: React.CSSProperties;
}> = ({ className = "w-5 h-5", style }) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path 
        d="M9 5L15 12L9 19" 
        stroke="#99A2AB" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

