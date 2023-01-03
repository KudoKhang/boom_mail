import { useNavigate } from 'react-router-dom';
import { ADMIN_URL, URL } from '../config/constants';
import { useAlert } from '../contexts/alert';
import { localCache } from '../utils/localStorage';

export function useHandleError() {
  const navigate = useNavigate();
  const { showError } = useAlert();

  const handleResponseMsg = (error) => {
    const msg = error?.response?.data?.detail || error?.response?.data?.message;
    if (typeof msg === 'string') {
      showError(msg);
      return;
    }
    showError(error?.message);
  };

  const handleUnauthorized = (error) => {
    if (error?.response?.status !== 401) return;
    localCache.clearUser();
    navigate(URL.LOGIN, { replace: true });
  };

  const handleAdminUnauthorized = (error) => {
    if (error?.response?.status !== 401) return;
    localCache.clearAdmin();
    navigate(ADMIN_URL.LOGIN, { replace: true });
  };

  return { handleResponseMsg, handleUnauthorized, handleAdminUnauthorized };
}
