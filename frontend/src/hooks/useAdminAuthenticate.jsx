import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAdmin } from '../api';
import { ADMIN_URL } from '../config/constants';
import { localCache } from '../utils/localStorage';
import { useHandleError } from './useHandleError';

const { LOGIN } = ADMIN_URL;

export function useAdminAuthenticate() {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleResponseMsg, handleAdminUnauthorized } = useHandleError();
  const [user, setUser] = useState({});

  const reloadUser = async () => {
    try {
      const userData = await getAdmin();
      localCache.setAdmin(userData);
      setUser(userData);
    } catch (error) {
      handleAdminUnauthorized(error);
      handleResponseMsg(error);
    }
  };

  const hasToken = () => {
    const token = localCache.getAdminToken();
    return !!token;
  };

  useEffect(() => {
    if (!hasToken()) {
      navigate(LOGIN, { replace: true });
      return;
    }

    if ([LOGIN].includes(location?.pathname)) return;

    (async () => {
      await reloadUser();
    })();
  }, [location]);

  return { reloadUser, user };
}
