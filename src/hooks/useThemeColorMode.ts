import { useContext } from 'react';

import { ThemeColorModeContext } from '@/contexts/ThemeColorModeContext';

function useThemeColorMode() {
  const colorMode = useContext(ThemeColorModeContext);

  return colorMode;
}

export default useThemeColorMode;
