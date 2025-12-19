import axios, { type AxiosInstance, type RawAxiosRequestHeaders, type ResponseType } from 'axios';
import { SERVER_URL } from '../../config.ts';
import { requestInterceptor } from './interceptors/requestInterceptor.ts';

export const instance: AxiosInstance = axios.create({
  baseURL: `${SERVER_URL}/`,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(requestInterceptor);

const requests = {
  get: <T = unknown>(url: string, headers?: RawAxiosRequestHeaders, responseType?: ResponseType) =>
    instance.get<T>(url, { headers, responseType }),
};

export default requests;
