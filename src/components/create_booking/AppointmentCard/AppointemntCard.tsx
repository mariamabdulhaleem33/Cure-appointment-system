import { useEffect, useState } from "react";
import type { BookingDate, DayGroup } from "../types";
import Header from "./Header";
import DisplayDays from "./DisplayDays";
import Footer from "./Footer";
import Time from "./Time";
import { useDoctorAvailability } from "../hooks/useDoctorAvailability";
type IProps = {
  doctorId: number | null;
};
/* ================= Helpers ================= */
const getMonthLabel = (date: string) => {
  return new Date(date).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
};

const AppointemntCard = ({ doctorId }: IProps) => {
  /* ================= Params ================= */

  /* ================= Fetch Data ================= */
  const token: string | null = localStorage.getItem("authToken");
  const { data: doctorAvailability = [] } = useDoctorAvailability(
    doctorId,
    token
  );

  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [selectedTime, setSelectedTime] = useState<string>("");

  /* ================= Months ================= */
  const monthsFromApi: string[] = Array.from(
    new Set(
      doctorAvailability?.map((item: DayGroup) => getMonthLabel(item.date))
    )
  );

  /* ================= Set Default Month ================= */
  useEffect(() => {
    if (monthsFromApi.length > 0 && !selectedMonth) {
      setSelectedMonth(monthsFromApi[0]);
    }
  }, [monthsFromApi, selectedMonth]);

  /* ================= Group Days ================= */
  const groupedData: Record<string, DayGroup> = (
    doctorAvailability ?? []
  ).reduce(
    (acc: Record<string, DayGroup>, curr: BookingDate) => {
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
    {} as Record<string, DayGroup> // هنا حددنا نوع الـ initial value
  );

  const finalDays: DayGroup[] = Object.values(groupedData);

  /* ================= Filter Days by Month ================= */
  const filteredDays = finalDays.filter(
    (day) => getMonthLabel(day.date) === selectedMonth
  );

  /* ================= Current Day ================= */
  const currentDay: DayGroup = filteredDays[selectedDayIndex] ?? {
    date: "",
    dayName: "",
    dayNumber: 0,
    slots: [],
  };

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
        selectedDayIndex={selectedDayIndex}
        setSelectedDayIndex={setSelectedDayIndex}
        setSelectedTime={setSelectedTime}
      />

      {/* Time Slots */}
      <Time
        currentDay={currentDay}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />

      {/* Footer */}
      <Footer
        doctorId={doctorId}
        selectedTime={selectedTime}
        currentDay={currentDay}
        selectedMonth={selectedMonth}
      />
    </section>
  );
};

export default AppointemntCard;
