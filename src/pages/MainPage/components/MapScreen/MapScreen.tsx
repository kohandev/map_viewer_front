import { MapScreenBox } from './styledComponents.ts';
import { GeoMap } from '../GeoMap/GeoMap.tsx';
import { observer } from 'mobx-react-lite';

export const MapScreen = observer(() => {
  return (
    <MapScreenBox>
      <GeoMap />
    </MapScreenBox>
  );
});
