import 'leaflet/dist/leaflet.css';

import type { LatLngExpression } from 'leaflet';
import { Icon, Point } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import { IEvent } from './Event';

const iconFoodTruck = new Icon({
  iconUrl: '/foodtruck-icon.png',
  iconRetinaUrl: '/foodtruck-icon.png',
  iconSize: new Point(64, 64),
});

const Map = ({ event }: { event: IEvent }) => {
  const position: LatLngExpression = [
    Number(event.location.latitude),
    Number(event.location.longitude),
  ];

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      className="h-96 w-full rounded-md"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker key={event.id} position={position} icon={iconFoodTruck} />
    </MapContainer>
  );
};

export default Map;
