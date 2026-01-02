import { useState } from "react";
import { AppointmentCard } from "@/components/appointments-page/components/AppointmentCard";
import { Calendar28 } from "@/components/appointments-page/components/Calender28";
import type { AppointmentCardData } from "@/Types/appointmentCardData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AppointmentListProps {
  data: AppointmentCardData[];
}
export function TabsDemo({ data }: AppointmentListProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  function handleDateChange(date: Date | null) {
    setSelectedDate(date);
  }

  const tabsTriggerClass =
    "data-[state=active]:bg-sky-700 data-[state=active]:text-white text-muted-foreground";
  const tabsContentClass =
    "flex gap-6 flex-wrap sm:justify-center xl:justify-start";

  function filterByDateAndStatus(
    status?: "Upcoming" | "Cancelled" | "Completed",
  ) {
    return data.filter(item => {
      const itemDate = item.date ? new Date(item.date) : null;

      const matchDate =
        !selectedDate ||
        (itemDate && itemDate.toDateString() === selectedDate.toDateString());

      const matchStatus = !status || item.status === status;

      return matchDate && matchStatus;
    });
  }

  const TABS = [
    { value: "all", status: undefined, label: "all" },
    { value: "upcoming", status: "Upcoming", label: "up coming" },
    { value: "Cancelled", status: "Cancelled", label: "Cancelled" },
    { value: "completed", status: "Completed", label: "completed" },
  ] as const;

  return (
    <div className="flex  flex-col gap-6">
      <Tabs
        defaultValue="all"
        className="gap-5"
      >
        <div className="flex justify-between flex-row-reverse ">
          <Calendar28
            onDateChange={handleDateChange}
            selectedDate={selectedDate}
          />
          <TabsList className="bg-none">
            {TABS.map(tab => (
              <TabsTrigger
                value={tab.value}
                className={tabsTriggerClass}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {TABS.map(tab => (
          <TabsContent
            value={tab.value}
            className={tabsContentClass}
          >
            {filterByDateAndStatus(tab.status).map(card => (
              <AppointmentCard
                key={card.id}
                card={card}
              />
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
