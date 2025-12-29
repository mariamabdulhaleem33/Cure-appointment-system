import { getDays, getYears, Months } from "@/utils/Date";
import { NativeSelect, NativeSelectOption } from "../../ui/native-select";
import type { FC } from "react";
import { Controller } from "react-hook-form";

const BirthdaySelector: FC<{ control: any }> = ({ control }) => {
  const Days = getDays();
  const Years = getYears(100);
  return (
    <div className="w-full flex justify-start gap-6 lg:justify-between items-center">
      <Controller
        control={control}
        name="birth_date.day"
        render={({ field }) => (
          <NativeSelect
            {...field}
            className="bg-[#F5F6F7] rounded-xs w-15 md:w-20 lg:w-18 xl:w-24"
          >
            <NativeSelectOption value="">Day</NativeSelectOption>
            {Days.map((day) => (
              <NativeSelectOption key={day} value={day}>
                {day}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        )}
      />

      <Controller
        control={control}
        name="birth_date.month"
        render={({ field }) => (
          <NativeSelect
            {...field}
            className="bg-[#F5F6F7] rounded-xs w-15 md:w-20 lg:w-18 xl:w-24"
          >
            <NativeSelectOption value="">Mon</NativeSelectOption>
            {Months.map((mon) => (
              <NativeSelectOption key={mon.value} value={mon.value}>
                {mon.label}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        )}
      />

      <Controller
        control={control}
        name="birth_date.year"
        render={({ field }) => (
          <NativeSelect
            {...field}
            className="bg-[#F5F6F7] rounded-xs w-15 md:w-20 lg:w-18 xl:w-24"
          >
            <NativeSelectOption value="">Year</NativeSelectOption>
            {Years.map((year) => (
              <NativeSelectOption key={year} value={year}>
                {year}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        )}
      />
    </div>
  );
};

export default BirthdaySelector;
