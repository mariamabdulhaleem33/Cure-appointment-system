import { AppointmentCard } from "@/components/appointments-page/components/AppointmentCard";
import { Calendar28 } from "@/components/appointments-page/components/Calender28";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <div className="flex  flex-col gap-6">
      <Tabs defaultValue="all" className="gap-5">
        <div className="flex justify-between flex-row-reverse ">
          <Calendar28 />
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
              value="canceled"
              className="
    data-[state=active]:bg-sky-700
    data-[state=active]:text-white
    text-muted-foreground
    
  "
            >
              canceled
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

        <TabsContent value="all" className="flex justify-content-center">
          <div className="flex gap-6 flex-wrap sm:justify-center xl:justify-start">
            <AppointmentCard status="upcoming" />
            <AppointmentCard status="completed" />
            <AppointmentCard status="canceled" />
            <AppointmentCard status="canceled" />
            <AppointmentCard status="canceled" />
          </div>
        </TabsContent>
        <TabsContent value="upcoming">
          <div className="flex gap-6 flex-wrap justify-start">
            <AppointmentCard status="upcoming" />
            <AppointmentCard status="upcoming" />
          </div>
        </TabsContent>
        <TabsContent value="canceled">
          <div className="flex gap-6 flex-wrap justify-start">
            <AppointmentCard status="canceled" />
            <AppointmentCard status="canceled" />
            <AppointmentCard status="canceled" />
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="flex gap-6 flex-wrap justify-start">
            <AppointmentCard status="completed" />
            <AppointmentCard status="completed" />
            <AppointmentCard status="completed" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
