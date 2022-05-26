import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '../../../context/Theme/Provider';
import { Button } from '..';

describe('Button component', () => {
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
        <Button onClick={jest.fn()} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});