import { getDays, getYears, Months } from "@/utils/Date";
import { NativeSelect, NativeSelectOption } from "../../ui/native-select";
import type { FC } from "react";

const BirthdaySelector: FC = () => {
  const Days = getDays();
  const Years = getYears(100);
  return (
    <div className="w-full flex justify-between items-center">
      <NativeSelect className="w-24 bg-[#F5F6F7] rounded-xs focus:outline-0">
        <NativeSelectOption value="">Day</NativeSelectOption>
        {Days.map((day) => (
          <NativeSelectOption key={day} value={day}>
            {day}
          </NativeSelectOption>
        ))}
      </NativeSelect>

      <NativeSelect className="w-24 bg-[#F5F6F7] rounded-xs">
        <NativeSelectOption value="">Mon</NativeSelectOption>
        {Months.map((mon) => (
          <NativeSelectOption key={mon.value} value={mon.value}>
            {mon.label}
          </NativeSelectOption>
        ))}
      </NativeSelect>

      <NativeSelect className="w-24 bg-[#F5F6F7] rounded-xs">
        <NativeSelectOption value="">Year</NativeSelectOption>
        {Years.map((year) => (
          <NativeSelectOption key={year} value={year}>
            {year}
          </NativeSelectOption>
        ))}
      </NativeSelect>
    </div>
  );
}

export default BirthdaySelector;