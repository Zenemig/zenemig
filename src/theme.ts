import { createTheme, PaletteMode, Theme } from '@mui/material';

// Define color palette for both light and dark modes
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode
          primary: {
            main: '#3f51b5',
          },
          secondary: {
            main: '#f50057',
          },
          background: {
            default: '#f5f5f5',
            paper: '#ffffff',
          },
          text: {
            primary: '#333333',
            secondary: '#666666',
          },
        }
      : {
          // Dark mode
          primary: {
            main: '#5c6bc0',
          },
          secondary: {
            main: '#ff4081',
          },
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
          text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
          },
        }),
  },
  typography: {
    fontFamily: 'var(--font-geist-sans)',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
        },
      },
    },
  },
});

// Create theme instances
export const lightTheme = createTheme(getDesignTokens('light'));
export const darkTheme = createTheme(getDesignTokens('dark'));

// Theme factory function
export const createAppTheme = (mode: PaletteMode): Theme => 
  createTheme(getDesignTokens(mode));

export default createAppTheme; 