import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { URL } from '../config/constants';
import { localCache } from '../utils/localStorage';

export function useAuthenticate() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localCache.getUserToken();

    if (!token) {
      navigate(URL.LOGIN, { replace: true });
    }
  }, []);
}
