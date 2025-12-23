import { useEffect, useState } from "react";
import type { DayGroup } from "../types";
import { bookingDate } from "../dummydata";
import Header from "./Header";
import DisplayDays from "./DisplayDays";
import Footer from "./Footer";
import Time from "./Time";

/* ================= Helpers ================= */
const getMonthLabel = (date: string) => {
  return new Date(date).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
};

const AppointemntCard = () => {
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
    <section className="w-full p-3 md:p-6 border-2 border-[#BBC1C7] rounded-[19px] bg-white mb-6">
      {/* Header */}
      <Header
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        monthsFromApi={monthsFromApi}
      />

      {/* Days */}
      <DisplayDays
        filteredDays={filteredDays}
        setSelectedDayIndex={setSelectedDayIndex}
        setSelectedTime={setSelectedTime}
        selectedDayIndex={selectedDayIndex}
      />

      {/* Time Slots */}
      <Time
        currentDay={currentDay}
        setSelectedTime={setSelectedTime}
        selectedTime={selectedTime}
      />
      {/* Footer */}
      <Footer
        selectedTime={selectedTime}
        currentDay={currentDay}
        selectedMonth={selectedMonth}
      />
    </section>
  );
};

export default AppointemntCard;
