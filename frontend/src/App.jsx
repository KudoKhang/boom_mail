import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AlertProvider } from './providers/AlertProvider';
import { LoadingProvider } from './providers/LoadingProvider';
import { router } from './router';
import { theme } from './theme';

function App() {
  return (
    <ErrorBoundary>
      <AlertProvider>
        <LoadingProvider>
          <Suspense fallback={<div />}>
            <RouterProvider router={router} theme={theme} />
          </Suspense>
        </LoadingProvider>
      </AlertProvider>
    </ErrorBoundary>
  );
}

export default App;
