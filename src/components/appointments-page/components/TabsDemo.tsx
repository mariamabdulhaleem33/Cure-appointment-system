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

  // const filteredItems = selectedDate
  //   ? data.filter(item => {
  //       const itemDate = item.date ? new Date(item.date) : null;
  //       return (
  //         itemDate !== null &&
  //         selectedDate !== null &&
  //         itemDate.toDateString() === selectedDate.toDateString()
  //       );
  //     })
  //   : data;

  //   const displayedData = selectedDate ? filteredItems : data;

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
            <TabsTrigger
              value="all"
              className="
    data-[state=active]:bg-sky-700
    data-[state=active]:text-white
    text-muted-foreground
    
  "
            >
              all
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className="
    data-[state=active]:bg-sky-700
    data-[state=active]:text-white
    text-muted-foreground
   
  "
            >
              up coming
            </TabsTrigger>
            <TabsTrigger
              value="Cancelled"
              className="
    data-[state=active]:bg-sky-700
    data-[state=active]:text-white
    text-muted-foreground
    
  "
            >
              Cancelled
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="
    data-[state=active]:bg-sky-700
    data-[state=active]:text-white
    text-muted-foreground
    
  "
            >
              completed
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value="all"
          className="flex justify-content-center"
        >
          <div className="flex gap-6 flex-wrap sm:justify-center xl:justify-start">
            {filterByDateAndStatus().map(card => (
              <AppointmentCard
                key={card.id}
                card={card}
              />
            ))}
            {/* {displayedData.map(card => (
              <AppointmentCard
                key={card.id}
                card={card}
              />
            ))} */}
          </div>
        </TabsContent>
        <TabsContent value="upcoming">
          <div className="flex gap-6 flex-wrap justify-start">
            {/* {data
              .filter(card => card.status === "Upcoming")
              .map(card => (
                <AppointmentCard
                  key={card.id}
                  card={card}
                />
              ))} */}
            {filterByDateAndStatus("Upcoming").map(card => (
              <AppointmentCard
                key={card.id}
                card={card}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Cancelled">
          <div className="flex gap-6 flex-wrap justify-start">
            {filterByDateAndStatus("Cancelled").map(card => (
              <AppointmentCard
                key={card.id}
                card={card}
              />
            ))}
            {/* {data
              .filter(card => card.status === "Cancelled")
              .map(card => (
                <AppointmentCard
                  key={card.id}
                  card={card}
                />
              ))} */}
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="flex gap-6 flex-wrap justify-start">
            {filterByDateAndStatus("Completed").map(card => (
              <AppointmentCard
                key={card.id}
                card={card}
              />
            ))}
            {/* {data
              .filter(card => card.status === "Completed")
              .map(card => (
                <AppointmentCard
                  key={card.id}
                  card={card}
                />
              ))} */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
