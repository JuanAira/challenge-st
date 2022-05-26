import lightTheme from '../assets/night_night_mode_moon_crescent_dark_mode_icon.svg';
import darkTheme from '../assets/sun_bright_brightness_light_mode_icon.svg';
import hamburger_idarkTheme from '../assets/elements_hamburger_interface_list_menu_ui_icon_dark.svg';
import hamburger_lightTheme from '../assets/elements_hamburger_interface_list_menu_ui_icon_light.svg';

export const THEME = {
  LIGHT: {
    name: 'light',
    description: 'Light mode',
  },
  DARK: {
    name: 'dark',
    description: 'Dark mode',
  },
}

export enum THEMES {
  'LIGHT' = 'light',
  'DARK' = 'dark',
}

export const THEME_IMAGE = {
  light: {
    img: lightTheme,
    alt: 'light theme',
  },
  dark: {
    img: darkTheme,
    alt: 'dark theme',
  },
}

export const THEME_IMAGE_HAMBURGER = {
  light: {
    img: hamburger_lightTheme,
    alt: 'light theme hamburger',
  },
  dark: {
    img: hamburger_idarkTheme,
    alt: 'dark theme hamburger',
  },
}

export const DEVICE_SIZE = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg'
};

export const DEVICE_SIZES = Object.values(DEVICE_SIZE);
export const SIZE_MOBILE = [DEVICE_SIZE.XS, DEVICE_SIZE.SM];
export const SIZE_TABLET = [DEVICE_SIZE.MD];
export const SIZE_DESKTOP = [DEVICE_SIZE.LG];

export const UI = {
  SIZE: {
    'GRID-2': '2px',
    'GRID-4': '4px',
    'GRID-8': '8px',
    'GRID-12': '12px',
    'GRID-16': '16px',
    'GRID-20': '20px',
    'GRID-24': '24px',
    'GRID-32': '32px',
    'GRID-40': '40px',
    'GRID-48': '48px',
    'GRID-56': '56px',
    'GRID-64': '64px',
    'GRID-72': '72px',
    'GRID-80': '80px',
    'GRID-88': '88px',
    'GRID-96': '96px',
    'GRID-104': '104px',
    'GRID-112': '112px',
    'GRID-120': '120px',
    'GRID-128': '128px',
  },
  COLORS: {
    COLORS_THEME: {
      LIGTH: '#FFFFFF',
      LIGTH_SECONDARY: '#F5F5F5',
      DARK: '#171B23',
      DARK_SECONDARY: '#222631',
    },
    'PURPLE-100': '#7598e4',
    'PURPLE-500': '#5b76b1',
  },
  FONT: {
    'SIZE-8': '8px',
    'SIZE-10': '10px',
    'SIZE-12': '12px',
    'SIZE-14': '14px',
    'SIZE-16': '16px',
    'SIZE-18': '18px',
    'SIZE-20': '20px',
    'SIZE-22': '22px',
    'SIZE-24': '24px',
    'SIZE-26': '26px',
  }
}