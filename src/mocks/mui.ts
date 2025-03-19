import React from 'react';
import { Theme } from '@mui/material/styles';

/**
 * Mocks for Material-UI components
 * Only mock what we need to test our components, not MUI implementation details
 */

/**
 * Mock for MUI ThemeProvider
 * Simply renders children with data attributes for testing
 */
export const mockMuiThemeProvider = () => {
  jest.mock('@mui/material/styles', () => ({
    ThemeProvider: jest.fn(({ children, theme }: { children: React.ReactNode; theme?: Partial<Theme> }) => 
      React.createElement('div', {
        'data-testid': 'mui-theme-provider',
        'data-theme-mode': theme?.palette?.mode || 'default'
      }, children)
    )
  }));
};

/**
 * Mock for MUI CssBaseline
 * Simply renders a div with a data-testid
 */
export const mockMuiCssBaseline = () => {
  jest.mock('@mui/material/CssBaseline', () => {
    const MockCssBaseline = () => React.createElement('div', {
      'data-testid': 'css-baseline'
    });
    MockCssBaseline.displayName = 'CssBaseline';
    return {
      __esModule: true,
      default: MockCssBaseline
    };
  });
};

/**
 * Mock for MUI Button
 * Renders a standard button with props for testing
 */
export const mockMuiButton = () => {
  jest.mock('@mui/material/Button', () => {
    const MockButton = ({ 
      children, 
      onClick, 
      variant, 
      ...props 
    }: { 
      children: React.ReactNode; 
      onClick?: () => void; 
      variant?: string; 
      [key: string]: unknown; 
    }) => React.createElement('button', {
      'data-testid': 'mui-button',
      'data-variant': variant || 'contained',
      onClick,
      ...props
    }, children);
    MockButton.displayName = 'Button';
    return {
      __esModule: true,
      default: MockButton
    };
  });
}; 