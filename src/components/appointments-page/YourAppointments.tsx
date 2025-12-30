import { TabsDemo } from "@/components/appointments-page/components/TabsDemo";
import { useAppointments } from "@/hooks/appointments/useAppointments";

export default function YourAppointments() {
  const { data, isLoading, isError } = useAppointments();
 
  if (isLoading) {
    return <div className="p-5 text-center">Loading appointments...</div>;
  }

  
  if (isError) {
    return <div className="p-5 text-center">Error loading appointments. Please try again.</div>;
  }

  if (!data || data.length === 0) {
    return <div className="py-5 text-center">No appointments found.</div>;

    
  }
console.log("Mapping appointments:", data);

data.forEach((a, i) => console.log(i, a));


  return (
    <>
    
    <div className="w-full flex justify-center py-10">
      <div className="w-full max-w-7xl px-4 flex flex-col gap-6">
        <h2 className="text-2xl font-serif">Your Appointments</h2>
        <TabsDemo data={data} />
      </div>
    </div>
    
    </>
  );
}
