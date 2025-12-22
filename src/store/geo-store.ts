import { makeAutoObservable, runInAction } from 'mobx';
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

  async startPolling() {
    if (this.intervalId) return;

    this.intervalId = window.setInterval(async () => {
      try {
        const { data } = await GeoService.getGeoData();
        console.log('data', data);
        runInAction(() => {
          updateGeoPointsMap(this.geoPointsMap, data, new Date());
        });
      } catch (error) {
        console.error('Failed to fetch geo data:', error);
      }
    }, 1000);
  }

  stopPolling() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
    this.geoPointsMap.clear();
  }
}

export default new GeoStore();
