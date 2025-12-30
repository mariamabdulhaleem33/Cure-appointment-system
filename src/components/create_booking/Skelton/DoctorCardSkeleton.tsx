import { Skeleton } from "@/components/ui/skeleton";

const DoctorCardSkeleton = () => {
  const pulseClass = "animate-pulse bg-gray-200";
  return (
    <section className="w-full md:w-[45%] lg:w-[37%] min-h-188.25 bg-[#F5F6F7] rounded-[19px] px-5 pt-8 pb-6 flex flex-col justify-between">
      {/* Header Skeleton */}
      <div className="flex flex-col items-center">
        <Skeleton className={`h-32 w-32 rounded-full mb-4 ${pulseClass}`} />
        <Skeleton className={`h-6 w-48 mb-2 ${pulseClass}`} />
        <Skeleton className={`h-4 w-24 ${pulseClass}`} />
      </div>

      {/* Details Skeleton (Stats) */}
      <div className="flex justify-between items-center px-2 py-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Skeleton className={`h-12 w-12 rounded-full ${pulseClass}`} />
            <Skeleton className={`h-3 w-8 ${pulseClass}`} />
            <Skeleton className={`h-2 w-12 ${pulseClass}`} />
          </div>
        ))}
      </div>

      {/* About Me Skeleton */}
      <div className="space-y-3">
        <Skeleton className={`h-5 w-28 mb-4 ${pulseClass}`} />
        <Skeleton className={`h-3 w-full ${pulseClass}`} />
        <Skeleton className={`h-3 w-full ${pulseClass}`} />
        <Skeleton className={`h-3 w-[80%] ${pulseClass}`} />
      </div>

      {/* Location Skeleton */}
      <div className="space-y-4 mt-6">
        <Skeleton className={`h-5 w-24 ${pulseClass}`} />
        <Skeleton className={`h-55 w-full rounded-4xl ${pulseClass}`} />
      </div>
    </section>
  );
};
export default DoctorCardSkeleton;
