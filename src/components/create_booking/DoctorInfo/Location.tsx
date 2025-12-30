type IProps = {
  latitude: number | null;
  longitude: number | null;
};
const Location = ({ latitude, longitude }: IProps) => {
  // console.log(latitude, longitude);
  if (!latitude || !longitude) {
    return (
      <div className="w-full h-60 animate-pulse bg-gray-100 rounded-4xl flex items-center justify-center">
        <span className="text-gray-400">Loading map...</span>
      </div>
    );
  }

  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <div className="w-full">
      <h2 className="text-[20px] mb-3 font-medium text-[#404448]">Location</h2>
      <div className="w-full h-52.5 rounded-4xl overflow-hidden border border-[#BBC1C7]/30">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Doctor Location"
        ></iframe>
      </div>
    </div>
  );
};
export default Location;
