import L from "leaflet"

export const createDoctorIcon = (imageUrl: string): L.DivIcon => {
  return new L.DivIcon({
    className: "bg-transparent",
    html: `
      <div class="relative w-[45px] h-[45px] flex items-center justify-center transition-transform hover:scale-110">
        <img 
          src="/imgs/map.png" 
          class="absolute inset-0 w-full h-full z-0 object-contain" 
          alt="marker-bg" 
        />
        
        <div class="absolute top-[4px] left-[4px] w-[30px] h-[30px] rounded-full overflow-hidden border-2 border-white shadow-sm z-10 group-hover:border-[#007bff] transition-colors">
          <img 
            src="${imageUrl}" 
            class="min-w-full h-full object-cover" 
            alt="doctor" 
          />
        </div>
      </div>`,
    iconSize: [45, 45],
    iconAnchor: [22, 45],
    popupAnchor: [0, -45],
  })
}
