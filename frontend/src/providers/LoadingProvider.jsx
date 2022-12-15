import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { OverlaySpinner } from '../components/OverlaySpinner';
import { LoadingContext } from '../contexts/loading';

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const valueLoading = useMemo(
    () => ({
      loading,
      showLoading: () => setLoading(true),
      hideLoading: () => setLoading(false),
    }),
    [loading]
  );

  return (
    <LoadingContext.Provider value={valueLoading}>
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
