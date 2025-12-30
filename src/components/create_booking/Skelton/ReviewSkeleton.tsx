import { Skeleton } from "@/components/ui/skeleton";

const ReviewSkeleton = () => {
  return (
    <>
      <div className="pl-4 md:basis-1/2 lg:basis-1/2">
        <div className="rounded-[19px] border border-[#BBC1C7] p-6 space-y-4 h-45">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
            <Skeleton className="h-6 w-10 rounded-lg" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSkeleton;
