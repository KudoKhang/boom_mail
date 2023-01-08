import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { OverlaySpinner } from '../components/OverlaySpinner';
import { LoadingContext } from '../contexts/loading';

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const showLoading = () => setLoading(true);

  const hideLoading = () => setLoading(false);

  const value = useMemo(
    () => ({
      loading,
      showLoading,
      hideLoading,
    }),
    [loading]
  );

  return (
    <LoadingContext.Provider value={value}>
      <>
        <OverlaySpinner open={loading} />
        {children}
      </>
    </LoadingContext.Provider>
  );
}

LoadingProvider.propTypes = {
  children: PropTypes.node,
};
