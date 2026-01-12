const EditFormSkelton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-7 lg:grid-rows-5 gap-x-16">
      {/* Title */}

      <div className=" bg-slate-200 animate-pulse rounded col-span-2 w-1/3 h-6" />

      {/* Inputs */}
      <div className="col-span-2 lg:col-span-1 h-25 flex flex-col justify-start items-start gap-2">
        <div className="h-4 w-1/3 bg-slate-200 rounded animate-pulse" />
        <div className="h-10 w-full bg-slate-200 rounded-md animate-pulse" />
      </div>

      <div className="col-span-2 lg:col-span-1 h-25 flex flex-col justify-start items-start gap-2">
        <div className="h-4 w-1/3 bg-slate-200 rounded animate-pulse" />
        <div className="h-10 w-full bg-slate-200 rounded-md animate-pulse" />
      </div>

      <div className="col-span-2 lg:col-span-1 h-25 flex flex-col justify-start items-start gap-2">
        <div className="h-4 w-1/3 bg-slate-200 rounded animate-pulse" />
        <div className="h-10 w-full bg-slate-200 rounded-md animate-pulse" />
      </div>

      {/* Birthday */}
      <div className="h-25 col-span-2 lg:col-span-1 flex flex-col justify-start items-start gap-2">
        <div className="h-4 w-1/3 bg-slate-200 rounded animate-pulse" />
        <div className="w-full flex justify-start gap-6 lg:justify-between items-center">
          <div className="h-10 w-full bg-slate-200 rounded animate-pulse" />
          <div className="h-10 w-full bg-slate-200 rounded animate-pulse" />
          <div className="h-10 w-full bg-slate-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Location */}
      <div className="col-span-2">
        <div className="flex flex-col gap-2 animate-pulse">
          <div className="h-4 w-1/4 bg-slate-200 rounded" />
          <div className="h-10 w-full bg-slate-200 rounded-md" />
        </div>
      </div>

      {/* Button */}
      <div className="col-span-2 lg:col-span-1 lg:col-start-2">
        <div className="h-11 w-full bg-slate-300 rounded-md animate-pulse" />
      </div>
    </div>
  );
};

export default EditFormSkelton;
