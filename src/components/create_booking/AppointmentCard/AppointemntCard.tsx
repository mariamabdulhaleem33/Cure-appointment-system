import { useEffect, useState } from "react";
import type { BookingDate, DayGroup } from "../types";
import Header from "./Header";
import DisplayDays from "./DisplayDays";
import Footer from "./Footer";
import Time from "./Time";
import { useDoctor } from "../hooks/useDoctor";
import { getDayName, getMonthLabel } from "./helper";
import { BookingSkeleton } from "../Skelton/BookingSkeleton";
type IProps = {
  doctorId: number | null;
};

const AppointemntCard = ({ doctorId }: IProps) => {
  const token: string | null = localStorage.getItem("authToken");
  const { data, isLoading } = useDoctor(doctorId, token);
  const doctorAvailability = data?.availability_slots;
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [selectedTime, setSelectedTime] = useState<string>("");

  /* ================= Months ================= */
  const monthsFromApi: string[] = Array.from(
    new Set(
      doctorAvailability?.map((item: BookingDate) => getMonthLabel(item.date))
    )
  );
  /* ================= Group Data ================= */

  const groupedData: Record<string, DayGroup> = (
    doctorAvailability ?? []
  ).reduce((acc: Record<string, DayGroup>, curr: BookingDate) => {
    if (!acc[curr.date]) {
      acc[curr.date] = {
        date: curr.date,
        dayName: getDayName(curr.date),
        dayNumber: Number(curr.date.split("-")[2]),
        slots: [],
      };
    }

    acc[curr.date].slots.push({
      start: curr.from,
      end: curr.to,
    });

    return acc;
  }, {} as Record<string, DayGroup>);
  const finalDays: DayGroup[] = Object.values(groupedData);

  /* ================= Filter  ================= */
  const filteredDays = finalDays?.filter(
    (day) => getMonthLabel(day.date) === selectedMonth
  );
  /* ================= Current Day ================= */
  const currentDay: DayGroup = filteredDays[selectedDayIndex] ?? {
    date: "",
    dayName: "",
    dayNumber: 0,
    slots: [],
  };

  useEffect(() => {
    if (monthsFromApi.length > 0 && !selectedMonth) {
      setSelectedMonth(monthsFromApi[0]);
    }
  }, [monthsFromApi, selectedMonth]);

  useEffect(() => {
    setSelectedDayIndex(0);
    setSelectedTime("");
  }, [selectedMonth]);
  // ========================
  // ====Display Skeleton ===
  // ========================
  if (isLoading) {
    return <BookingSkeleton />;
  }
  return (
    <section className="w-full p-3 lg:p-6 border-2 border-[#BBC1C7] rounded-[19px] bg-white mb-6">
      <Header
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        monthsFromApi={monthsFromApi}
      />

      <DisplayDays
        filteredDays={filteredDays}
        selectedDayIndex={selectedDayIndex}
        setSelectedDayIndex={setSelectedDayIndex}
        setSelectedTime={setSelectedTime}
      />

      <Time
        currentDay={currentDay}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />

      <Footer
        doctorId={doctorId}
        session_price={data?.session_price}
        selectedTime={selectedTime}
        currentDay={currentDay}
        selectedMonth={selectedMonth}
      />
    </section>
  );
};
export default AppointemntCard;
