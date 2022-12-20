import { useNavigate } from 'react-router-dom';
import { URL } from '../config/constants';
import { useAlert } from '../contexts/alert';
import { localCache } from '../utils/localStorage';

export function useHandleError() {
  const navigate = useNavigate();
  const { showError } = useAlert();

  const handleResponseMsg = (error) => {
    showError(error?.response?.data?.message || error?.message);
  };

  const handleUnauthorized = () => {
    localCache.clearUser();
    navigate(URL.LOGIN, { replace: true });
  };

  return { handleResponseMsg, handleUnauthorized };
}
