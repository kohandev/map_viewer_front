import type { InternalAxiosRequestConfig } from 'axios';
import authStore from '../../store/control-store.ts';

export const requestInterceptor = (request: InternalAxiosRequestConfig) => {
  const accessToken = authStore.accessToken;

  if (accessToken && request.headers) {
    request.headers.authorization = `Bearer ${accessToken}`;
  }

  return request;
};
