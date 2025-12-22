import { MapContainer, TileLayer } from 'react-leaflet';
import { GeoMarker } from '../GeoMarker/GeoMarker.tsx';
import geoStore from '../../../../store/geo-store.ts';
import { observer } from 'mobx-react-lite';
import { START_LAT, START_LNG } from '../../../../constants.ts';

export const GeoMap = observer(() => {
  const { geoPoints } = geoStore;

  return (
    <MapContainer
      center={[START_LAT, START_LNG]}
      zoom={12}
      style={{ height: '100%', width: '100%' }}
    >
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
