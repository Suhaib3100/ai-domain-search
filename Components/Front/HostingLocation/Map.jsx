import { Map, Marker } from "pigeon-maps";

import { useSelector } from "react-redux";
export default function LocationMap() {
  const hostingLocation = useSelector((state) => state.hostingLocation);

  const data = hostingLocation
    ? [hostingLocation?.lat, hostingLocation?.lon]
    : [40.8584328, -74.1637553];
  //   const data = [40.8584328, -74.1637553];
  return (
    <div className="p-4 border rounded-xl shadow-sm w-full">
      <Map
        height={500}
        defaultCenter={data}
        defaultZoom={11}
        center={data}
        animate
      >
        <Marker width={50} anchor={data} />
      </Map>
    </div>
  );
}
