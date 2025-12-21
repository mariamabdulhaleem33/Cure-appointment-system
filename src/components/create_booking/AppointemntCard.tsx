import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarDays, ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";

/* ================= Types ================= */
type BookingDate = {
  date: string;
  start_time: string;
  end_time: string;
  day_name: string;
};

type Slot = {
  start: string;
  end: string;
};

type DayGroup = {
  date: string;
  dayName: string;
  dayNumber: number;
  slots: Slot[];
};

/* ================= Helpers ================= */
const getMonthLabel = (date: string) => {
  return new Date(date).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
};

const AppointemntCard = () => {
  /* ================= From Api ================= */
  const bookingDate: BookingDate[] = [
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
      date: "2025-12-23",
      start_time: "11:00",
      end_time: "11:30",
      day_name: "Monday",
    },
    {
      date: "2026-1-1",
      start_time: "11:00",
      end_time: "11:30",
      day_name: "Monday",
    },
  ];

  /* ================= Months ================= */
  const monthsFromApi = Array.from(
    new Set(bookingDate.map((item) => getMonthLabel(item.date)))
  );

  /* ================= Group Days ================= */
  const groupedData = bookingDate.reduce<Record<string, DayGroup>>(
    (acc, curr) => {
      if (!acc[curr.date]) {
        acc[curr.date] = {
          date: curr.date,
          dayName: curr.day_name,
          dayNumber: Number(curr.date.split("-")[2]),
          slots: [],
        };
      }

      acc[curr.date].slots.push({
        start: curr.start_time,
        end: curr.end_time,
      });

      return acc;
    },
    {}
  );
  // convert groupedData to array
  const finalDays: DayGroup[] = Object.values(groupedData);

  /* ================= States ================= */
  const [selectedMonth, setSelectedMonth] = useState(monthsFromApi[0]);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");

  /* ================= Filter Days by Month ================= */
  const filteredDays = finalDays.filter(
    (day) => getMonthLabel(day.date) === selectedMonth
  );

  /* ================= Current Day ================= */
  const currentDay =
    filteredDays[selectedDayIndex] ??
    ({
      date: "",
      dayName: "",
      dayNumber: 0,
      slots: [],
    } as DayGroup);

  /* ================= Reset on Month Change ================= */
  useEffect(() => {
    setSelectedDayIndex(0);
    setSelectedTime("");
  }, [selectedMonth]);

  return (
    <section className="w-full p-6 border-2 border-[#BBC1C7] rounded-[19px] bg-white mb-6">
      {/* Header */}
      <div className="h-[40px] flex justify-between items-center mb-6 border-b">
        <h2 className="text-[#404448] font-medium text-[16px]">
          Choose date and time
        </h2>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 outline-none">
            <CalendarDays size={20} />
            <span className="font-bold text-sm">{selectedMonth}</span>
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

      {/* Days */}
      <div className="flex flex-wrap gap-4 mb-8">
        {filteredDays.map((day, index) => (
          <button
            key={day.date}
            onClick={() => {
              setSelectedDayIndex(index);
              setSelectedTime("");
            }}
            className={`flex flex-col items-center justify-center w-[55px] h-[65px] rounded-lg transition ${
              selectedDayIndex === index
                ? "bg-[#145DB8] text-white"
                : "bg-gray-50 text-gray-400 hover:bg-gray-100"
            }`}
          >
            <span className="text-xs font-medium uppercase">
              {day.dayName.slice(0, 3)}
            </span>
            <span className="text-sm font-semibold">{day.dayNumber}</span>
          </button>
        ))}
      </div>

      {/* Time Slots */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {currentDay.slots.map((slot, index) => {
          const value = `${slot.start} - ${slot.end}`;

          return (
            <button
              key={index}
              onClick={() => setSelectedTime(value)}
              className={`py-3 rounded-lg text-sm font-medium transition ${
                selectedTime === value
                  ? "bg-[#145DB8] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {value}
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">
          {selectedTime
            ? `${currentDay.dayName}, ${selectedMonth.split(",")[0]} ${
                currentDay.dayNumber
              } - ${selectedTime}`
            : "Please select a slot"}
        </span>

        <button
          disabled={!selectedTime}
          className={`px-6 py-2 rounded-lg border transition ${
            selectedTime
              ? "border-[#145DB8] text-[#145DB8] hover:bg-blue-50"
              : "border-gray-300 text-gray-400 cursor-not-allowed"
          }`}
        >
          Book
        </button>
      </div>
    </section>
  );
};

export default AppointemntCard;
