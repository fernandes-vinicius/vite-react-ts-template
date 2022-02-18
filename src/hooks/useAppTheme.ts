import { useContext } from 'react';

import { AppThemeContext } from '@/contexts/AppThemeContext';

export function useAppTheme() {
  const themeCtx = useContext(AppThemeContext);

  return themeCtx;
}
