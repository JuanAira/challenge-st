import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ThemeProvider from '../../../../context/Theme/Provider';
import ThemeContext from '../../../../context/Theme/Context';
import { Header } from '../../Header';
import { lightTheme } from '../../../../context/Theme/Context';

describe('Header component', () => {
  beforeAll(() => {
    window.matchMedia = window.matchMedia || function () {
      return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    };
  });

  test('should match to snapshot - base - dark', () => {
    const { container } = render(
      <ThemeProvider>
        <Header />
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
        <Header />
      </ThemeContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test('should match to snapshot - ligth - mobile', () => {
    global.innerWidth = 200;
    global.dispatchEvent(new Event('resize'));

    const value = {
      theme: lightTheme,
      toggleTheme: jest.fn(),
      isDarkTheme: true,
    };

    const { container } = render(
      <ThemeContext.Provider value={value}>
        <Header />
      </ThemeContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  test('should to macht the correct links - mobile', () => {
    global.innerWidth = 200;
    global.dispatchEvent(new Event('resize'));

    const { container } = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    const links = container.querySelectorAll('a');
    expect(links.length).toBe(0);
  });

  test('should to macht the correct links - desktop', () => {
    global.innerWidth = 1200;
    global.dispatchEvent(new Event('resize'));

    const { container } = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    const links = container.querySelectorAll('a');
    expect(links.length).toBe(4);
  });

  test('should to call the fn', () => {
    const value = {
      theme: lightTheme,
      toggleTheme: jest.fn(),
      isDarkTheme: true,
    };

    const { container } = render(
      <ThemeContext.Provider value={value}>
        <Header />
      </ThemeContext.Provider>
    );
    const swicht = container.querySelectorAll('input');
    fireEvent.click(swicht[0]);
    expect(value.toggleTheme).toHaveBeenCalledTimes(1);
  });

  test('should match to snapshot - mobile - dark', async () => {
    global.innerWidth = 200;
    global.dispatchEvent(new Event('resize'));

    const { container } = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
