import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarDays, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
type BookingDate = {
  date: string;
  start_time: string;
  end_time: string;
  day_name: string;
};

type DayGroup = {
  date: string;
  dayName: string;
  dayNumber: number;
  slots: string[];
};

const AppointemntCard = () => {
  const bookingDate = [
    {
      date: "2025-12-22",
      start_time: "09:00",
      end_time: "09:30",
      day_name: "Monday",
    },
    {
      date: "2025-12-22",
      start_time: "09:30",
      end_time: "10:00",
      day_name: "Monday",
    },
    {
      date: "2025-12-22",
      start_time: "10:00",
      end_time: "10:30",
      day_name: "Monday",
    },
    {
      date: "2025-12-22",
      start_time: "10:30",
      end_time: "11:00",
      day_name: "Monday",
    },
    {
      date: "2025-12-22",
      start_time: "11:00",
      end_time: "11:30",
      day_name: "Monday",
    },
    {
      date: "2025-6-2",
      start_time: "11:00",
      end_time: "11:30",
      day_name: "friday",
    },
  ];
  const getAvailableMonths = (dates: BookingDate[]) => {
    // 1. استخراج الشهور الفريدة بصيغة "اسم الشهر، السنة"
    const months = dates.map((item) => {
      const d = new Date(item.date);
      return d.toLocaleString("en-US", { month: "long", year: "numeric" });
    });
    return Array.from(new Set(months));
  };

  const monthsFromApi = getAvailableMonths(bookingDate);
  const groupedData = bookingDate.reduce<Record<string, DayGroup>>(
    (acc, curr) => {
      if (!acc[curr.date]) {
        acc[curr.date] = {
          date: curr.date,
          dayName: curr.day_name,
          dayNumber: curr.date.split("-")[2],
          slots: [],
        };
      }
      acc[curr.date].slots.push(curr.start_time);
      return acc;
    },
    {}
  );

  const finalDays: DayGroup[] = Object.values(groupedData);

  // States
  const [selectedMonth, setSelectedMonth] = useState(monthsFromApi[0]);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");

  const currentDay =
    finalDays[selectedDayIndex] ??
    ({
      slots: [],
      dayName: "",
      dayNumber: 0,
      date: "",
    } as DayGroup);

  return (
    <section className="w-full p-6 border-2 border-[#BBC1C7] rounded-[19px] bg-white mb-6">
      <div className="h-[40px] border-b-1 border-[#99A2AB] flex justify-between items-center mb-6">
        <h2 className="text-[#404448] font-medium text-[16px]">
          Choose date and time
        </h2>

        <DropdownMenu>
          <DropdownMenuTrigger className="border-none pb-5 flex items-center gap-2 px-4 py-2 outline-none">
            <CalendarDays size={20} className="text-[#05162C]" />
            <span className="text-[#05162C] font-bold text-sm">
              {selectedMonth}
            </span>
            <ChevronsUpDown size={14} className="text-gray-400" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[193px] h-auto">
            {/* ماب الشهور هنا */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Days Strip - مرتبطة بالـ API الآن */}
      <div className="flex flex-wrap gap-4 mb-8 pb-2">
        {finalDays.map((item, index) => (
          <button
            key={item.date}
            onClick={() => {
              setSelectedDayIndex(index);
              setSelectedTime("");
            }}
            className={`flex flex-col items-center justify-center p-3 rounded-[8px] w-[50px] h-[60px] transition-all duration-300 ${
              selectedDayIndex === index
                ? "bg-[#145DB8] text-white"
                : "bg-gray-50 text-gray-400 hover:bg-gray-100 border border-transparent"
            }`}
          >
            <span className="text-[12px] uppercase font-medium mb-1">
              {item.dayName.substring(0, 3)}
            </span>
            <span className="text-[14px] font-medium">{item.dayNumber}</span>
          </button>
        ))}
      </div>

      {/* Time Slots - مرتبطة بالـ API الآن */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {currentDay.slots.map((slot: string) => (
          <button
            key={slot}
            onClick={() => setSelectedTime(slot)}
            className={`py-3 p-2 rounded-[10px] text-[14px] font-medium transition-all ${
              selectedTime === slot
                ? "bg-[#145DB8] text-white shadow-md"
                : "bg-[#F5F6F7] text-[#6D7379] hover:bg-gray-200"
            }`}
          >
            {slot}
          </button>
        ))}
      </div>

      {/* Footer Summary */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
            <CalendarDays className="text-[#145DB8]" size={20} />
          </div>
          <div>
            <span className="text-sm font-bold text-[#1A202C]">
              {selectedTime
                ? `${currentDay.dayName}, ${selectedMonth.split(",")[0]} ${
                    currentDay.dayNumber
                  } - ${selectedTime}`
                : "Please select a preferred slot"}
            </span>
          </div>
        </div>
        <button
          disabled={!selectedTime}
          className={`w-[132px] h-[48px] py-3 p-2 rounded-[8px] font-normal text-[16px] transition-all border-2 flex items-center justify-center ${
            selectedTime
              ? "bg-white border-[#145DB8] text-[#145DB8] hover:bg-blue-50"
              : "bg-gray-100 border-transparent text-gray-400 cursor-not-allowed"
          }`}
        >
          Book
        </button>
      </div>
    </section>
  );
};
export default AppointemntCard;
