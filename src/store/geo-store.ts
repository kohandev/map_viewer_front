import { makeAutoObservable } from 'mobx';
import { GeoService } from '../api/services/geo/service.ts';
import type { TMapPoint } from '../pages/MainPage/components/GeoMap/types.ts';
import { updateGeoPointsMap } from './helpers/updateGeoPointsMap.ts';

export class GeoStore {
  geoPointsMap = new Map<string, TMapPoint>();
  intervalId?: number;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get geoPoints(): TMapPoint[] {
    return Array.from(this.geoPointsMap.values());
  }

  get geoPointsCount(): number {
    return this.geoPointsMap.size;
  }

  get lostGeoPointsCount(): number {
    return this.geoPoints.filter((point) => point.isLost).length;
  }

  async startPolling() {
    this.geoPointsMap.clear();
    if (this.intervalId) return;

    this.intervalId = window.setInterval(async () => {
      const { data } = await GeoService.getGeoData();
      updateGeoPointsMap(this.geoPointsMap, data, new Date());
    }, 1000);
  }

  stopPolling() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
}

export default new GeoStore();
