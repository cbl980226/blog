import type { FC, ReactNode } from 'react';
import type { ThemeContextProps } from './ThemeContext';
import type { DeepPartial } from '../../helpers/UtilityTypes';
import type { Theme } from './Theme.interface';
import { Merger } from '@ephox/katamari';
import { useEffect, useMemo } from 'react';
import { useThemeMode } from './ThemeHooks';
import { ThemeContext } from './ThemeContext';
import defaultTheme from '../../theme/default';

const deepMerge = Merger.deepMerge;

export interface ThemeProviderProps {
  children: ReactNode;
  dark?: boolean;
  customTheme?: DeepPartial<Theme>;
  preference?: boolean;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  const { dark, preference = true, customTheme = {} } = props;
  const [mode, { setMode, toggleMode }] = useThemeMode(preference);
  const mergedTheme = deepMerge(defaultTheme, customTheme);

  useEffect(() => {
    if (dark && setMode) {
      setMode('dark');
    }
  }, [dark, setMode]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add('dark');
    }
  }, [mode]);

  const themeContextProps = useMemo<ThemeContextProps>(
    () => ({
      mode,
      theme: mergedTheme,
      toggleMode,
    }),
    [mode, toggleMode, mergedTheme]
  );

  return (
    <ThemeContext.Provider value={themeContextProps}>
      {children}
    </ThemeContext.Provider>
  );
};
