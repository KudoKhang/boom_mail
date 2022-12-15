/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

export class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error) {
    // You can also log the error to an error reporting service
    console.error(error);
  }

  render() {
    if (this.state.hasError)
      return <Box sx={{ mt: 3, textAlign: 'center' }}>Đã có lỗi xảy ra!</Box>;

    return this.props.children;
  }
}
