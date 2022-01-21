import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import {
  unstable_createMuiStrictModeTheme as createTheme,
  ThemeProvider,
} from '@mui/material/styles';

type ThemeColorMode = 'light' | 'dark';

type ThemeColorModeProviderProps = {
  children: ReactNode;
};

type ThemeColorModeContextType = {
  toggleColorMode: () => void;
};

export const ThemeColorModeContext = createContext(
  {} as ThemeColorModeContextType,
);

export function ThemeColorModeProvider(props: ThemeColorModeProviderProps) {
  const { children } = props;
  const [mode, setMode] = useState<ThemeColorMode>(() => {
    const storagedMode = localStorage.getItem('themeColorMode');

    return (storagedMode ?? 'light') as ThemeColorMode;
  });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  // customize theme here
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#00B2FF' : '#006AFF',
          },
        },
      }),
    [mode],
  );

  useEffect(() => {
    localStorage.setItem('themeColorMode', mode);
  }, [mode]);

  return (
    <ThemeColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeColorModeContext.Provider>
  );
}

export default ThemeColorModeProvider;
