import { FiChevronRight } from "react-icons/fi";
import { typography } from "../../lib/typography";

interface DropdownItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export const DropdownItem = ({ icon, label, onClick }: DropdownItemProps) => {
  return (
    <li
      className="flex items-center justify-between cursor-pointer hover:bg-gray-200 px-2 py-2 rounded-lg transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className={typography.menu}>{label}</span>
      </div>
      <FiChevronRight className="text-gray-400 w-5 h-5" />
    </li>
  );
};
