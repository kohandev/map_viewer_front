import type { TMapPoint } from '../../pages/MainPage/components/GeoMap/types.ts';
import type { TGetGeoResponse } from '../../api/services/geo/types.ts';
import { POINT_DELETE_TIME, POINT_LOSS_TIME } from '../../constants.ts';

export const updateGeoPointsMap = (
  storePointMap: Map<string, TMapPoint>,
  incomingGeoData: TGetGeoResponse[],
  now: Date,
): void => {
  // adding new points or updating existing ones
  for (const incomingPoint of incomingGeoData) {
    const id = incomingPoint.id;

    storePointMap.set(id, {
      id,
      lat: incomingPoint.lat,
      lng: incomingPoint.lng,
      direction: incomingPoint.direction,
      isLost: false,
      lastUpdate: now,
    });
  }

  // check update timestamps and delete/mark old points
  for (const [id, point] of storePointMap) {
    const timeDiff = now.getTime() - point.lastUpdate.getTime();

    // delete points that have not been updated for longer than POINT_DELETE_TIME minutes
    if (timeDiff > POINT_DELETE_TIME) {
      storePointMap.delete(id);
      continue;
    }

    // mark a point as lost if it has not been updated for more than POINT_LOSS_TIME minutes
    if (timeDiff > POINT_LOSS_TIME && !point.isLost) {
      storePointMap.set(id, {
        ...point,
        isLost: true,
      });
    }
  }
};
