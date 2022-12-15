import axios from 'axios';
import { API_URL } from '../config/constants';
import { localCache } from './localStorage';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
  },
});

const addAuthToken = (config) => {
  const { url, headers } = config;
  let authToken;

  if (/admin\/*/.test(url)) {
    authToken = localCache.getAdminToken();
  } else {
    authToken = localCache.getUserToken();
  }

  if (authToken) {
    headers.Authorization = `${authToken}`;
  }

  return { ...config, headers };
};

const handleError = (error) => {
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(addAuthToken, handleError);

export default axiosInstance;
