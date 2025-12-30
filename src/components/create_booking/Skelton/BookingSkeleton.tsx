import { Skeleton } from "@/components/ui/skeleton";

export const BookingSkeleton = () => {
  const pulseClass = "animate-pulse bg-gray-200";

  return (
    <div className="w-full border border-gray-200 rounded-4xl p-6 bg-white shadow-sm space-y-8">
      {/* Header: Choose date and time & Month Picker */}
      <div className="flex justify-between items-center">
        <Skeleton className={`h-6 w-40 ${pulseClass}`} />
        <Skeleton className={`h-10 w-32 rounded-lg ${pulseClass}`} />
      </div>

      {/* Days Slider Skeleton */}
      <div className="flex gap-4">
        <Skeleton className={`h-16 w-14 rounded-xl ${pulseClass}`} />{" "}
        {/* Selected Day */}
        {[1, 2, 3].map((i) => (
          <Skeleton
            key={i}
            className={`h-16 w-14 rounded-xl opacity-40 ${pulseClass}`}
          />
        ))}
      </div>

      {/* Time Slots Grid Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Skeleton
            key={i}
            className={`h-12 w-full rounded-xl ${pulseClass}`}
          />
        ))}
      </div>

      {/* Footer: Please select a slot & Book Button */}
      <div className="flex justify-between items-center pt-4">
        <Skeleton className={`h-4 w-32 ${pulseClass}`} />
        <Skeleton className={`h-12 w-28 rounded-xl ${pulseClass}`} />
      </div>
    </div>
  );
};
