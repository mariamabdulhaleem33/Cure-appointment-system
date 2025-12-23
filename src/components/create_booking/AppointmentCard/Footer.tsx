import type { DayGroup } from "../types";

type IProps = {
  selectedTime: string;
  currentDay: DayGroup;
  selectedMonth: string;
};
const Footer = ({ selectedTime, currentDay, selectedMonth }: IProps) => {
  return (
    <>
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
              ? "border-[#145DB8] bg-[#145DB8] text-white hover:bg-blue-800 cursor-pointer"
              : "border-gray-300 text-gray-400 cursor-not-allowed"
          }`}
        >
          Book
        </button>
      </div>
    </>
  );
};

export default Footer;
