function DoctorCardSkeleton() {
  return (
    <div className="rounded-2xl bg-white shadow-sm p-4 animate-pulse">
      <div className="flex gap-3">
        <div className="w-16 h-16 rounded-xl bg-gray-200" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-32 bg-gray-200 rounded" />
          <div className="h-3 w-48 bg-gray-200 rounded" />
          <div className="h-3 w-40 bg-gray-200 rounded" />
        </div>
      </div>


      <div className="flex items-center justify-between mt-4">
        <div className="h-3 w-20 bg-gray-200 rounded" />
        <div className="h-4 w-10 bg-gray-200 rounded" />
      </div>


      <div className="mt-4 h-10 w-full rounded-xl bg-gray-200" />
    </div>
  );
}

export default DoctorCardSkeleton