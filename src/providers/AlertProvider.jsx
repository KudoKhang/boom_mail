import Types from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react';
import PopupAlert from '../components/Alert';
import { AlertContext } from '../contexts/alert';

export function AlertProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('');

  const showSuccess = useCallback((text) => {
    setMessage(text);
    setSeverity('success');
    setOpen(true);
  }, []);
  const showError = useCallback((text) => {
    setMessage(text);
    setSeverity('error');
    setOpen(true);
  }, []);
  const hideAlert = useCallback(() => {
    setMessage('');
    setOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      open,
      showError,
      showSuccess,
    }),
    [open]
  );

  return (
    <AlertContext.Provider value={value}>
      <PopupAlert open={open} close={hideAlert} severity={severity} message={message} />
      {children}
    </AlertContext.Provider>
  );
}

AlertProvider.propTypes = {
  children: Types.node,
};
