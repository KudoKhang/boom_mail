import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUser } from '../api';
import { URL } from '../config/constants';
import { localCache } from '../utils/localStorage';
import { useHandleError } from './useHandleError';

const { HOME, PAYMENT, PRICING, LOGIN, PROFILE, BASE } = URL;

export function useAuthenticate() {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleResponseMsg, handleUnauthorized } = useHandleError();
  const [user, setUser] = useState({});

  const reloadUser = async () => {
    try {
      const userData = await getUser();
      localCache.setUser(userData);
      setUser(userData);
    } catch (error) {
      handleUnauthorized(error);
      handleResponseMsg(error);
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

    if (![BASE, HOME, PAYMENT, PRICING, PROFILE].includes(location?.pathname)) {
      setUser(localCache.getUser());
      return;
    }

    (async () => {
      await reloadUser();
    })();
  }, [location]);

  return { reloadUser, user };
}
