import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import {
  unstable_createMuiStrictModeTheme as createTheme,
  ThemeProvider,
} from '@mui/material/styles';

const poppins = {
  fontFamily: [
    'Poppins',
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
};

export type ThemeColorMode = 'light' | 'dark';

type AppThemeProviderProps = {
  children: ReactNode;
};

type AppThemeContextType = {
  toggleColorMode: () => void;
};

export const AppThemeContext = createContext({} as AppThemeContextType);

export function AppThemeProvider(props: AppThemeProviderProps) {
  const { children } = props;

  const [mode, setMode] = useState<ThemeColorMode>(() => {
    const storagedMode = localStorage.getItem('themeColorMode');

    return (storagedMode ?? 'light') as ThemeColorMode;
  });

  useEffect(() => {
    localStorage.setItem('themeColorMode', mode);
  }, [mode]);

  const changeColorMode = useMemo(
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
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              'html, body, #root': {
                overflow: 'hidden',
              },
            },
          },
        },
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#5150FF' : '#6F00FF',
          },
        },
        typography: {
          ...poppins,
          button: {
            textTransform: 'capitalize',
          },
        },
      }),
    [mode],
  );

  return (
    <AppThemeContext.Provider value={changeColorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}
