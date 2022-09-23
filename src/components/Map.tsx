import 'leaflet/dist/leaflet.css';

import type { LatLngExpression } from 'leaflet';
import { Icon } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import { IEvent } from './Events';

const Map = ({ event }: { event: IEvent }) => {
  const position: LatLngExpression = [
    Number(event.location.latitude),
    Number(event.location.longitude),
  ];

  Icon.Default.imagePath = '/';

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      className="h-96 w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker key={event.id} position={position}></Marker>
    </MapContainer>
  );
};

export default Map;
