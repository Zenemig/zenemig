import React from 'react';
import type { Theme } from '@mui/material/styles';

/**
 * Minimal MUI component mocks
 * Only mock what is absolutely necessary for testing component logic
 */

// Theme mode state for testing
let currentThemeMode = 'light';
export const setMockThemeMode = (mode: 'light' | 'dark') => {
  currentThemeMode = mode;
};

/**
 * Mock for useMediaQuery - essential for responsive testing
 */
export const mockUseMediaQuery = (defaultResponse = false) => {
  const useMediaQueryMock = jest.fn().mockImplementation((query) => defaultResponse);
  
  jest.mock('@mui/material/useMediaQuery', () => ({
    __esModule: true,
    default: useMediaQueryMock
  }));

  return useMediaQueryMock;
};

/**
 * Minimal ThemeProvider mock - only provides theme context
 */
export const mockMuiThemeProvider = () => {
  jest.mock('@mui/material/styles', () => ({
    ThemeProvider: ({ children }: { children: React.ReactNode }) => 
      React.createElement('div', {
        'data-testid': 'mui-theme-provider'
      }, children),
    useTheme: () => ({
      palette: {
        mode: currentThemeMode,
        primary: { main: '#1976d2' },
        secondary: { main: '#dc004e' }
      }
    })
  }));
};

/**
 * Minimal Switch mock for theme toggle testing
 */
export const mockMuiSwitch = () => {
  jest.mock('@mui/material/Switch', () => {
    const MockSwitch = ({ 
      checked, 
      onChange,
      inputProps = {},
      ...props 
    }: { 
      checked?: boolean;
      onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
      inputProps?: { [key: string]: unknown };
      [key: string]: unknown; 
    }) => React.createElement('input', {
      type: 'checkbox',
      checked,
      onChange,
      'aria-label': inputProps['aria-label'],
      'data-testid': 'mui-switch',
      ...props
    });

    return { __esModule: true, default: MockSwitch };
  });
};

/**
 * Minimal Grid mock for layout testing
 */
export const mockMuiGrid = () => {
  jest.mock('@mui/material/Grid', () => {
    const MockGrid = ({ 
      children,
      container,
      item,
      ...props 
    }: { 
      children: React.ReactNode;
      container?: boolean;
      item?: boolean;
      [key: string]: unknown; 
    }) => React.createElement('div', {
      'data-testid': 'mui-grid',
      'data-container': container ? 'true' : undefined,
      'data-item': item ? 'true' : undefined,
      ...props
    }, children);

    return { __esModule: true, default: MockGrid };
  });
};

// Setup all required mocks
export const setupTestEnvironment = () => {
  mockMuiThemeProvider();
  mockMuiSwitch();
  mockMuiGrid();
  mockUseMediaQuery();
}; 