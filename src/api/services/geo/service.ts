import requests from '../../instance.ts';
import type { TGetGeoResponse } from './types.ts';

export const GeoService = { getGeoData: () => requests.get<TGetGeoResponse[]>('/geo') };
