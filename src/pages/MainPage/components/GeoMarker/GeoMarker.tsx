import { observer } from 'mobx-react-lite';
import type { TMapPoint } from '../GeoMap/types.ts';
import { Marker } from 'react-leaflet';
import { createSvgIcon } from '../../helpers/createSvgIcon.ts';

export const GeoMarker = observer(({ point }: { point: TMapPoint }) => {
  const icon = createSvgIcon(point.direction, point.isLost);
  console.log('point', point.id);

  return <Marker position={[point.lat, point.lng]} icon={icon} />;
});
