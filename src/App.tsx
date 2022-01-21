import { ModalProvider } from 'react-modal-hook';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import { ThemeColorModeProvider } from '@/contexts/ThemeColorModeContext';
import Routes from '@/routes';
import store from '@/store';

function App() {
  return (
    <Router>
      <ReduxProvider store={store}>
        <ThemeColorModeProvider>
          <ModalProvider rootComponent={TransitionGroup}>
            <Routes />
          </ModalProvider>
        </ThemeColorModeProvider>
      </ReduxProvider>
    </Router>
  );
}

export default App;
