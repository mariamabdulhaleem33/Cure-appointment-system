import type { DayGroup } from "../types";

type IProps = {
  filteredDays: DayGroup[];
  setSelectedDayIndex: (val: number) => void;
  setSelectedTime: (val: string) => void;
  selectedDayIndex: number;
};
const DisplayDays = ({
  filteredDays,
  setSelectedDayIndex,
  setSelectedTime,
  selectedDayIndex,
}: IProps) => {
  return (
    <>
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
    </>
  );
};

export default DisplayDays;
