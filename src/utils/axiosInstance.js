import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import storage from './localStorage';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const addAuthToken = (config) => {
  const { url, headers } = config;
  let authToken;

  if (/admin\/*/.test(url)) {
    authToken = storage.getAdminToken();
  } else {
    authToken = storage.getUserToken();
  }

  if (!isEmpty(authToken)) {
    headers.common.Authorization = `Bearer ${authToken}`;
  }

  return { ...config, headers };
};

const handleError = (error) => {
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(addAuthToken, handleError);

export default axiosInstance;
