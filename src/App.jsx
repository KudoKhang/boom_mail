import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AlertProvider } from './providers/AlertProvider';
import { router } from './router';
import { theme } from './theme';

function App() {
  return (
    <ErrorBoundary>
      <AlertProvider>
        <Suspense fallback={<div />}>
          <RouterProvider router={router} theme={theme} />
        </Suspense>
      </AlertProvider>
    </ErrorBoundary>
  );
}

export default App;
