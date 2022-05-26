import React, { useCallback, useEffect, useState } from 'react';
import { THEMES } from '../../constants';
import { ProviderProps } from './Provider.d';
import ThemeContext, {
  darkTheme,
  ThemeDetails,
  lightTheme,
} from './Context';

const Provider = ({ children }: ProviderProps) => {
  const isDarkThemeFromSystem = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;

  const themeFromLocalStorage = window.localStorage.getItem('theme');

  const getThemeConfig = useCallback(() => {
    if (!themeFromLocalStorage) {
      if (isDarkThemeFromSystem) return darkTheme;
      return lightTheme;
    }
    if (themeFromLocalStorage === THEMES.DARK) return darkTheme;
    return lightTheme;
  }, [isDarkThemeFromSystem, themeFromLocalStorage]);

  const [theme, setTheme] = useState<ThemeDetails>(getThemeConfig());

  useEffect(() => {
    setTheme(getThemeConfig());
  }, [getThemeConfig]);

  const toggleTheme = () => {
    const themeToSet = isDarkTheme ? lightTheme : darkTheme;
    setTheme(themeToSet);
    window.localStorage.setItem('theme', themeToSet.themeName);
  };

  const isDarkTheme = theme.themeName === THEMES.DARK;
  const value = { theme, toggleTheme, isDarkTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
};

export default Provider;
