import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUser } from '../api';
import { URL } from '../config/constants';
import { localCache } from '../utils/localStorage';
import { useHandleError } from './useHandleError';

const { HOME, PAYMENT, PRICING, LOGIN } = URL;

export function useAuthenticate() {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleResponseMsg, handleUnauthorized } = useHandleError();

  const reloadUser = async () => {
    try {
      const user = await getUser();
      localCache.setUser(user);
    } catch (error) {
      handleResponseMsg(error);
      handleUnauthorized(error);
    }
  };

  const hasToken = () => {
    const token = localCache.getUserToken();
    return !!token;
  };

  useEffect(() => {
    if (!hasToken()) {
      navigate(LOGIN, { replace: true });
      return;
    }

    if (![HOME, PAYMENT, PRICING].includes(location?.pathname)) return;

    (async () => {
      await reloadUser();
    })();
  }, [location]);

  return { reloadUser };
}
