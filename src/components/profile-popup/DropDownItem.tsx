import { ChevronRightIcon } from "./icons";
import type { DropdownItemProps } from "./types";
import { TYPOGRAPHY } from "./constants";

export const DropdownItem = ({ icon, label, onClick }: DropdownItemProps) => {
  return (
    <li
      className="flex items-center justify-between cursor-pointer hover:bg-gray-200 px-2 py-2 rounded-lg transition-colors"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      role="menuitem"
      tabIndex={0}
      aria-label={label}
      style={{
        minHeight: "44px",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        alignItems: "center",
      }}
    >
      <div
        className="flex items-center gap-3 flex-1 min-w-0"
        style={{
          overflow: "hidden",
          minHeight: "24px",
          paddingTop: "2px",
          paddingBottom: "2px",
        }}
      >
        {icon}
        <span
          className={TYPOGRAPHY.menu}
          style={{
            lineHeight: "1.5",
            display: "block",
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            paddingTop: "1px",
            paddingBottom: "1px",
          }}
        >
          {label}
        </span>
      </div>
      <ChevronRightIcon
        className="w-5 h-5 flex-shrink-0"
        style={{
          minWidth: "20px",
          width: "20px",
          height: "20px",
          marginLeft: "auto",
          flexShrink: 0,
        }}
      />
    </li>
  );
};
