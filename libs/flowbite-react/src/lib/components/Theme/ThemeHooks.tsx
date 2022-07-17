import type { Dispatch, SetStateAction } from 'react';
import type { ThemeContextProps, ThemeMode } from './ThemeContext';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

export const useTheme = (): ThemeContextProps => useContext(ThemeContext);

export interface ThemeModeActions {
  setMode?: Dispatch<SetStateAction<ThemeMode>>;
  toggleMode?(): void;
}

export const useThemeMode = (
  preference: boolean
): [ThemeMode, ThemeModeActions] => {
  if (!preference) return [undefined, {}];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mode, setMode] = useState<ThemeMode>(undefined);

  const hasWindow = typeof window !== 'undefined';
  const savePreference = (m: string) => localStorage.setItem('theme-mode', m);

  const toggleMode = () => {
    if (!mode) {
      return;
    }

    if (hasWindow) {
      document.documentElement.classList.toggle('dark');
    }

    savePreference(mode);
    setMode(mode == 'dark' ? 'light' : 'dark');
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!preference) return;
    const matchesDarkPreference =
      hasWindow &&
      !!window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userMode =
      (localStorage.getItem('theme-mode') as ThemeMode) ||
      (matchesDarkPreference ? 'dark' : 'light');

    if (userMode) {
      setMode(userMode);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!preference || !mode || !hasWindow) return;

    savePreference(mode);

    if (mode === 'dark') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  return [
    mode,
    {
      setMode,
      toggleMode,
    },
  ];
};
