const SidebarHeaderSkelton = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 animate-pulse">
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full bg-slate-200" />

      {/* Name */}
      <div className="h-5 w-40 bg-slate-200 rounded" />

      {/* Location */}
      <div className="h-4 w-32 bg-slate-200 rounded" />
    </div>
  );
};

export default SidebarHeaderSkelton;