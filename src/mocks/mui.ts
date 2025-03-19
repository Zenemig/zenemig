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
  jest.mock('@mui/material/styles', () => {
    const createThemeMock = jest.fn((options) => ({
      palette: {
        mode: options?.palette?.mode || 'light',
        primary: { main: '#1976d2' },
        secondary: { main: '#dc004e' },
        ...options?.palette
      },
      breakpoints: {
        up: jest.fn().mockReturnValue('@media (min-width:0px)'),
        down: jest.fn().mockReturnValue('@media (max-width:0px)'),
        between: jest.fn(),
        only: jest.fn(),
        values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        unit: 'px',
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      spacing: jest.fn().mockImplementation((value) => value * 8),
      zIndex: {
        mobileStepper: 1000,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500
      },
      divider: 'rgba(0, 0, 0, 0.12)',
      ...options
    }));

    const useThemeMock = jest.fn().mockReturnValue({
      palette: {
        mode: 'light',
        primary: { main: '#1976d2' },
        secondary: { main: '#dc004e' }
      },
      breakpoints: {
        up: jest.fn().mockReturnValue('@media (min-width:0px)'),
        down: jest.fn().mockReturnValue('@media (max-width:0px)'),
        between: jest.fn(),
        only: jest.fn(),
        values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        unit: 'px',
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      spacing: jest.fn().mockImplementation((value) => value * 8),
      zIndex: {
        mobileStepper: 1000,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500
      },
      divider: 'rgba(0, 0, 0, 0.12)'
    });

    return {
      ThemeProvider: jest.fn(({ children, theme }: { children: React.ReactNode; theme?: Partial<Theme> }) => 
        React.createElement('div', {
          'data-testid': 'mui-theme-provider',
          'data-theme-mode': theme?.palette?.mode || 'default'
        }, children)
      ),
      createTheme: createThemeMock,
      useTheme: useThemeMock
    };
  });
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

/**
 * Mock for useMediaQuery hook with configurable response
 */
export const mockUseMediaQuery = (defaultResponse = false) => {
  // We'll create a map to store different responses based on the query
  const mockResponses = new Map();

  // Define interface for our extended mock function
  interface UseMediaQueryMock extends jest.Mock {
    mockForQuery(query: string | ((theme: unknown) => string), response: boolean): UseMediaQueryMock;
  }

  const useMediaQueryMock = jest.fn().mockImplementation((query) => {
    // If we have a specific response for this query, return it
    if (mockResponses.has(query)) {
      return mockResponses.get(query);
    }
    
    // Handle common breakpoint queries
    if (typeof query === 'string') {
      if (query.includes('min-width') && query.includes('sm')) {
        return true; // Above small breakpoint
      }
      if (query.includes('min-width') && query.includes('lg')) {
        return true; // Above large breakpoint
      }
      if (query.includes('max-width') && query.includes('sm')) {
        return false; // Below small breakpoint (not mobile)
      }
    }
    
    // Default response
    return defaultResponse;
  }) as UseMediaQueryMock;

  // Add a method to set a specific response for a query
  useMediaQueryMock.mockForQuery = (query, response) => {
    mockResponses.set(query, response);
    return useMediaQueryMock;
  };

  jest.mock('@mui/material/useMediaQuery', () => {
    return {
      __esModule: true,
      default: useMediaQueryMock
    };
  });

  return useMediaQueryMock;
};

/**
 * Mock for Box component
 */
export const mockMuiBox = () => {
  jest.mock('@mui/material/Box', () => {
    const MockBox = ({ 
      children, 
      ...props 
    }: { 
      children: React.ReactNode; 
      [key: string]: unknown; 
    }) => React.createElement('div', {
      'data-testid': 'mui-box',
      ...props
    }, children);
    MockBox.displayName = 'Box';
    return {
      __esModule: true,
      default: MockBox
    };
  });
};

/**
 * Mock for Grid component
 */
export const mockMuiGrid = () => {
  jest.mock('@mui/material/Grid', () => {
    const MockGrid = ({ 
      children, 
      container,
      item,
      xs,
      sm,
      md,
      lg,
      xl,
      ...props 
    }: { 
      children: React.ReactNode;
      container?: boolean;
      item?: boolean;
      xs?: boolean | number;
      sm?: boolean | number;
      md?: boolean | number;
      lg?: boolean | number;
      xl?: boolean | number;
      [key: string]: unknown; 
    }) => React.createElement('div', {
      'data-testid': 'mui-grid',
      'data-container': container ? 'true' : undefined,
      'data-item': item ? 'true' : undefined,
      'data-xs': xs !== undefined ? String(xs) : undefined,
      'data-sm': sm !== undefined ? String(sm) : undefined,
      'data-md': md !== undefined ? String(md) : undefined,
      'data-lg': lg !== undefined ? String(lg) : undefined,
      'data-xl': xl !== undefined ? String(xl) : undefined,
      ...props
    }, children);
    MockGrid.displayName = 'Grid';
    return {
      __esModule: true,
      default: MockGrid
    };
  });
};

/**
 * Mock for AppBar component
 */
export const mockMuiAppBar = () => {
  jest.mock('@mui/material/AppBar', () => {
    const MockAppBar = ({ 
      children, 
      ...props 
    }: { 
      children: React.ReactNode; 
      [key: string]: unknown; 
    }) => React.createElement('header', {
      'data-testid': 'mui-app-bar',
      ...props
    }, children);
    MockAppBar.displayName = 'AppBar';
    return {
      __esModule: true,
      default: MockAppBar
    };
  });
};

/**
 * Mock for Toolbar component
 */
export const mockMuiToolbar = () => {
  jest.mock('@mui/material/Toolbar', () => {
    const MockToolbar = ({ 
      children, 
      ...props 
    }: { 
      children: React.ReactNode; 
      [key: string]: unknown; 
    }) => React.createElement('div', {
      'data-testid': 'mui-toolbar',
      ...props
    }, children);
    MockToolbar.displayName = 'Toolbar';
    return {
      __esModule: true,
      default: MockToolbar
    };
  });
};

/**
 * Mock for Typography component
 */
export const mockMuiTypography = () => {
  jest.mock('@mui/material/Typography', () => {
    const MockTypography = ({ 
      children, 
      variant, 
      component = 'p',
      ...props 
    }: { 
      children: React.ReactNode;
      variant?: string;
      component?: string;
      [key: string]: unknown; 
    }) => React.createElement(component as string, {
      'data-testid': 'mui-typography',
      'data-variant': variant,
      ...props
    }, children);
    MockTypography.displayName = 'Typography';
    return {
      __esModule: true,
      default: MockTypography
    };
  });
}; 