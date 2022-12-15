import React from 'react';
import Types from 'prop-types';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

export default function PopupAlert({ open, close, message, severity = 'success' }) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    close();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

PopupAlert.propTypes = {
  open: Types.bool,
  close: Types.func,
  message: Types.string,
  severity: Types.string,
};
