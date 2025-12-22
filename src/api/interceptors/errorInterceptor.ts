import type { AxiosError } from 'axios';

export const errorInterceptor = (error: AxiosError) => {
  console.error('❌ Server ERROR:', {
    status: error.response?.status,
    statusText: error.response?.statusText,
    data: error.response?.data,
    message: error.message,
    url: error.config?.url,
    method: error.config?.method,
  });

  return Promise.reject(error);
};
