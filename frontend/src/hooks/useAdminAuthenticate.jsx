import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ADMIN_URL } from '../config/constants';
import { localCache } from '../utils/localStorage';

const { LOGIN } = ADMIN_URL;

export function useAdminAuthenticate() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = { first_name: 'admin', last_name: '' };

  const hasToken = () => {
    const token = localCache.getAdminToken();
    return !!token;
  };

  useEffect(() => {
    if (!hasToken()) {
      navigate(LOGIN, { replace: true });
    }
  }, [location]);

  return { user };
}
