import L from 'leaflet';
import { getMarkerSvg } from './getMarkerSvg.ts';

export const createSvgIcon = (direction: number, isLost: boolean) =>
  L.divIcon({
    className: '',
    html: getMarkerSvg(direction, isLost),
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
