import axios, {
  RawAxiosRequestHeaders,
  RawAxiosRequestConfig,
  AxiosError,
} from 'axios';

const ApiCall = async (
  method: string,
  path: string,
  data: object | undefined,
) => {
  try {
    const headers: RawAxiosRequestHeaders = {
      'Content-Type': 'application/json',
    };

    const config: RawAxiosRequestConfig = {
      url: path,
      method,
      headers,
      data,
    };

    if (method === 'GET') {
      if (data) {
        config.params = data;
      }
    }

    return await axios(config);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
  }
};

const Api = {
  get: (path: string, params?: object) => {
    return ApiCall('GET', path, params);
  },
  put: (path: string, data: object) => {
    return ApiCall('PUT', path, data);
  },
  post: (path: string, data: object) => {
    return ApiCall('POST', path, data);
  },
  delete: (path: string, data: object) => {
    return ApiCall('DELETE', path, data);
  },
};

export default Api;
