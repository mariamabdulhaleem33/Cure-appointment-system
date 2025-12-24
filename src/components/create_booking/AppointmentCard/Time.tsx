import type { DayGroup } from "../types";

type IProps = {
  currentDay: DayGroup;
  setSelectedTime: (val: string) => void;
  selectedTime: string;
};
const Time = ({ currentDay, setSelectedTime, selectedTime }: IProps) => {
  return (
    <>
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
    </>
  );
};

export default Time;
