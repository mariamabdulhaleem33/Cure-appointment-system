import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarDays, ChevronsUpDown } from "lucide-react";
type IProps = {
  selectedMonth: string;
  setSelectedMonth: (val: string) => void;
  monthsFromApi: string[];
};
const Header = ({ selectedMonth, setSelectedMonth, monthsFromApi }: IProps) => {
  return (
    <>
      <div className="h-[40px] flex justify-between items-center mb-6 border-b">
        <h2 className="text-[#404448] font-medium text-[12px] md:text-[16px]">
          Choose date and time
        </h2>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 px-2 py-2 outline-none">
            <CalendarDays size={20} />
            <span className="font-normal md:font-bold text-sm">
              {selectedMonth}
            </span>
            <ChevronsUpDown size={14} />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-[200px]">
            {monthsFromApi.map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                  selectedMonth === month ? "font-bold text-[#145DB8]" : ""
                }`}
              >
                {month}
              </button>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default Header;
