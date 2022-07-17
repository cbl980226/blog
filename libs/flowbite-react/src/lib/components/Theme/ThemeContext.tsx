import type { Theme } from './Theme.interface';
import { createContext } from 'react';
import defaultTheme from '../../theme/default';

export type ThemeMode = 'light' | 'dark' | undefined;

export interface ThemeContextProps {
  theme: Theme;
  mode?: ThemeMode;
  toggleMode?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
});
