import { ErrorBoundary } from 'react-error-boundary';
import { ModalProvider } from 'react-modal-hook';
import { TransitionGroup } from 'react-transition-group';

import { AppRoutes } from '@/AppRoutes';
import { ErrorFallback } from '@/components/ErrorFallback';
import { AppThemeProvider } from '@/contexts/AppThemeContext';

function App() {
  return (
    <AppThemeProvider>
      <ModalProvider rootComponent={TransitionGroup}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AppRoutes />
        </ErrorBoundary>
      </ModalProvider>
    </AppThemeProvider>
  );
}

export default App;
