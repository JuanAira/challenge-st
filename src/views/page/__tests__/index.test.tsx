import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '../../../context/Theme/Provider';
import ThemeContext from '../../../context/Theme/Context';
import { Home } from '../Home';
import { lightTheme } from '../../../context/Theme/Context';

describe('Home page', () => {
  beforeAll(() => {
    window.matchMedia = window.matchMedia || function () {
      return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    };
  });

  test('should match to snapshot - base', () => {
    const { container } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  test('should match to snapshot - ligth', () => {
    const value = {
      theme: lightTheme,
      toggleTheme: jest.fn(),
      isDarkTheme: true,
    };

    const { container } = render(
      <ThemeContext.Provider value={value}>
        <Home />
      </ThemeContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});