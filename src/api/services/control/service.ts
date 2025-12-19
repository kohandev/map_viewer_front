import requests from '../../instance.ts';
import type { TGetTokenResponse } from './types.ts';

export const ControlService = {
  getToken: () => requests.get<TGetTokenResponse>('/auth/token'),
  startEngine: () => requests.get('/engine/start'),
  stopEngine: () => requests.get('/engine/stop'),
};
