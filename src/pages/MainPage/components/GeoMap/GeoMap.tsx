import { MapContainer, TileLayer } from 'react-leaflet';
import { GeoMarker } from '../GeoMarker/GeoMarker.tsx';
import geoStore from '../../../../store/geo-store.ts';
import { observer } from 'mobx-react-lite';

export const GeoMap = observer(() => {
  const { geoPoints } = geoStore;

  return (
    <MapContainer center={[50.45, 30.52]} zoom={6} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {geoPoints.map((point) => (
        <GeoMarker key={point.id} point={point} />
      ))}
    </MapContainer>
  );
});
