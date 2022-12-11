import axiosIns from '../../utils/axiosInstance';

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
