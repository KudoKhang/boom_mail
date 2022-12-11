import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export function OverlaySpinner({ open = false, handleClose = () => {} }) {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

OverlaySpinner.propTypes = {
  open: PropTypes.bool,
};
