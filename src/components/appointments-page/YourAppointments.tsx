import { TabsDemo } from "@/components/appointments-page/components/TabsDemo";


export default function YourAppointments() {
  return (
    <>
    
    <div className="w-full flex justify-center py-10">
      <div className="w-full max-w-7xl px-4 flex flex-col gap-6">
        <h2>Your Appointments</h2>
        <TabsDemo />
      </div>
    </div>
    
    </>
  );
}
