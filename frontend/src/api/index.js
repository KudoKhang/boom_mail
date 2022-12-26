import { users } from '../pages/Admin/Dashboard/helper';
import axiosIns from '../utils/axiosInstance';
import { localCache } from '../utils/localStorage';

export const SignupApi = async (params) => {
  const { data } = await axiosIns.post('/signup', {}, { params });
  return data;
};

export const LoginApi = async (params) => {
  const { data } = await axiosIns.post('/login', {}, { params });
  return data;
};

export const addMailsApi = async (params, data) => {
  const { data: resData } = await axiosIns.post('/spam', data, { params });
  return resData;
};

export const getUser = async () => {
  const token = localCache.getUserToken();
  const { data } = await axiosIns.post('/user', {}, { params: { token } });
  return data;
};

export const paymentHandler = async () => {
  const token = localCache.getUserToken();
  const { data } = await axiosIns.post('/payment', {}, { params: { token } });
  return data;
};

export const logoutUser = async () => {
  localCache.clearUser();
  return {};
};

export const buyPackage = async (name) => {
  const token = localCache.getUserToken();
  const { data } = await axiosIns.post('/buy', {}, { params: { token, package_name: name } });
  return data;
};

// admin
export const getAdmin = async () => {
  const token = localCache.getAdminToken();
  const { data } = await axiosIns.post('/user', {}, { params: { token } });
  return data;
};

export const logoutAdmin = async () => {
  localCache.clearAdmin();
  return {};
};

export const getUsers = async () => {
  // const token = localCache.getAdminToken();
  // const { data } = await axiosIns.get('/admin_get_all_user', { params: { token } });
  // return data;
  return users;
};
