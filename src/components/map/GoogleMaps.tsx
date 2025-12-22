// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps"

const position = {
  lat: 30.0444,
  lng: 31.2357,
}
const mapsApiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY

export default function GoogleMaps() {
  return (
    <APIProvider apiKey={mapsApiKey}>
      <div className="w-full h-full ">
        <Map zoom={9} center={position}></Map>
      </div>
    </APIProvider>
    // <LoadScript googleMapsApiKey={mapsApiKey}>
    //   <GoogleMap
    //     mapContainerStyle={{ width: "100%", height: "100%" }}
    //     center={PinPoint}
    //     zoom={22}
    //   >
    //     <Marker position={PinPoint} />
    //   </GoogleMap>
    // </LoadScript>
  )
}
