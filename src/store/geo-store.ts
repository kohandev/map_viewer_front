import { makeAutoObservable } from 'mobx';
import { fromPromise, type IPromiseBasedObservable } from 'mobx-utils';
import type { TGetGeoResponse } from '../api/services/geo/types.ts';
import { GeoService } from '../api/services/geo/service.ts';

export class GeoStore {
  geoData?: IPromiseBasedObservable<TGetGeoResponse[]>;
  isGeoLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getGeoDataAction = () => {
    this.geoData = fromPromise(GeoService.getGeoData().then((response) => response.data));
  };
}

export default new GeoStore();
