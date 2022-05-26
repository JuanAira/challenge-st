/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { THEMES, THEME, UI } from '../../constants';

export interface ThemeDetails {
  themeName: THEMES;
  backgroundColor: string;
  color: string;
  description: string;
}

export const lightTheme: ThemeDetails = {
  themeName: THEMES.LIGHT,
  description: THEME.LIGHT.description,
  color: UI.COLORS.COLORS_THEME.DARK,
  backgroundColor: UI.COLORS.COLORS_THEME.LIGTH,
};

export const darkTheme: ThemeDetails = {
  themeName: THEMES.DARK,
  description: THEME.DARK.description,
  color: UI.COLORS.COLORS_THEME.LIGTH,
  backgroundColor: UI.COLORS.COLORS_THEME.DARK,
};

export default React.createContext({
  theme: darkTheme,
  isDarkTheme: false,
  toggleTheme: () => { },
});
