import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaletteMode } from '@mui/material';
import { mockJotaiAtoms, setupMockThemeAtom } from '@/mocks/jotai';
import { 
  mockMuiThemeProvider, 
  mockMuiCssBaseline, 
  mockMuiButton,
  mockUseMediaQuery,
  mockMuiBox,
  mockMuiGrid,
  mockMuiAppBar,
  mockMuiToolbar,
  mockMuiTypography
} from '@/mocks/mui';

// Initialize all mocks with a single setup call
const setupTestEnvironment = () => {
  // Ensure MUI component mocks are applied
  mockMuiThemeProvider();
  mockMuiCssBaseline();
  mockMuiButton();
  mockUseMediaQuery();
  mockMuiBox();
  mockMuiGrid();
  mockMuiAppBar();
  mockMuiToolbar();
  mockMuiTypography();

  // Ensure Jotai atoms are mocked
  mockJotaiAtoms();

  // Create a mock theme for testing
  jest.mock('@/theme', () => ({
    __esModule: true,
    default: jest.fn((mode) => createMockTheme(mode))
  }));
};

// Run setup once
setupTestEnvironment();

// Create a complete mock theme for testing
const createMockTheme = (mode: PaletteMode = 'light') => ({
  palette: {
    mode,
    primary: { 
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#1976d2',
      600: '#1565c0',
      700: '#0d47a1',
      800: '#0d47a1',
      900: '#0d47a1',
      A100: '#82b1ff',
      A200: '#448aff',
      A400: '#2979ff',
      A700: '#2962ff'
    },
    secondary: { 
      main: '#dc004e',
      light: '#ff4081',
      dark: '#9a0036',
      contrastText: '#ffffff'
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#ffffff'
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    info: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#ffffff'
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { 
      default: '#fff', 
      paper: '#f5f5f5' 
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    },
    common: {
      black: '#000',
      white: '#fff'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  spacing: 8,
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    up: jest.fn(),
    down: jest.fn(),
    between: jest.fn(),
    only: jest.fn(),
    not: jest.fn(),
    unit: 'px'
  },
  shape: { borderRadius: 4 },
  components: {},
  direction: 'ltr',
  mixins: { toolbar: { minHeight: 56 } },
  shadows: Array(25).fill('none'),
  transitions: {
    create: jest.fn(),
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    }
  },
  zIndex: {
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  }
});

/**
 * Custom render function that wraps components with necessary providers
 * @param ui - The React component to render
 * @param options - Additional render options
 * @param themeMode - Optional theme mode to use
 * @returns The rendered component with testing utilities and mock handlers
 */
function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
  themeMode: PaletteMode = 'light'
) {
  // Setup the atom mock value for theme
  const { mockSetMode } = setupMockThemeAtom(themeMode);
  
  // Create a wrapper component that mimics your providers
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <div data-testid="mui-theme-provider" data-theme-mode={themeMode}>
        <div data-testid="css-baseline" />
        {children}
      </div>
    );
  };

  return {
    ...render(ui, { wrapper: Wrapper, ...options }),
    mockSetMode
  };
}

/**
 * Sets up userEvent for interaction testing
 * @returns A configured userEvent instance
 */
function setupUserEvent() {
  return userEvent.setup();
}

// Export everything from testing library plus our custom utilities
export * from '@testing-library/react';
export { 
  renderWithProviders, 
  setupUserEvent
}; 