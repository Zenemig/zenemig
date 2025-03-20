import { createTheme as muiCreateTheme, Theme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

// Create a theme instance for each mode
const getTheme = (mode: PaletteMode): Theme => muiCreateTheme({
  palette: {
    mode,
    primary: {
      // Burgundy red from zenemig.net
      main: '#8C1D18',
      light: '#A8433F',
      dark: '#6A1512',
      contrastText: '#F8F8F8',
    },
    secondary: {
      // Dark gray/brown complementary to the primary
      main: '#3A3335',
      light: '#5C5456',
      dark: '#292427',
      contrastText: '#F8F8F8',
    },
    // Using grayscale without pure black/white
    background: {
      default: mode === 'light' ? '#F8F8F8' : '#121212',
      paper: mode === 'light' ? '#EFEFEF' : '#1E1E1E',
    },
    text: {
      primary: mode === 'light' ? '#212121' : '#E0E0E0',
      secondary: mode === 'light' ? '#5C5456' : '#A0A0A0',
      disabled: mode === 'light' ? '#9E9E9E' : '#666666',
    },
    error: {
      main: '#C62828',
      light: '#E57373',
      dark: '#B71C1C',
    },
    warning: {
      main: '#F9A825',
      light: '#FFD54F',
      dark: '#F57F17',
    },
    info: {
      main: '#1565C0',
      light: '#64B5F6',
      dark: '#0D47A1',
    },
    success: {
      main: '#2E7D32',
      light: '#81C784',
      dark: '#1B5E20',
    },
    divider: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
  },
  typography: {
    // Main body text font family
    fontFamily: '"Roboto", sans-serif',
    // Display text for special components
    displayFont: {
      fontFamily: 'var(--unica-one-font), cursive',
    },
    // Title text for headings
    h1: {
      fontFamily: 'var(--roboto-condensed-font), sans-serif',
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: 'var(--roboto-condensed-font), sans-serif',
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: 'var(--roboto-condensed-font), sans-serif',
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: 'var(--roboto-condensed-font), sans-serif',
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: 'var(--roboto-condensed-font), sans-serif',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: 'var(--roboto-condensed-font), sans-serif',
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: '"Roboto", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: '"Roboto", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
    button: {
      fontFamily: '"Roboto", sans-serif',
      textTransform: 'none',
      fontWeight: 500,
    },
    caption: {
      fontFamily: '"Roboto", sans-serif',
    },
    overline: {
      fontFamily: '"Roboto", sans-serif',
    },
    subtitle1: {
      fontFamily: 'var(--roboto-condensed-font), sans-serif',
    },
    subtitle2: {
      fontFamily: 'var(--roboto-condensed-font), sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 16px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundImage: 'none',
          backgroundColor: 'transparent',
          boxSizing: 'border-box'
        },
        elevation1: {
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
      defaultProps: {
        elevation: 0
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    // Add Link styling to match zenemig.net
    MuiLink: {
      styleOverrides: {
        root: {
          color: mode === 'light' ? '#8C1D18' : '#A8433F',
          textDecoration: 'none',
          transition: 'color 0.3s ease',
          '&:hover': {
            color: mode === 'light' ? '#D42A24' : '#C15955',
            textDecoration: 'none',
          },
          '&:visited': {
            textDecoration: 'none',
          },
          '&:active': {
            textDecoration: 'none',
          },
          '&:focus': {
            textDecoration: 'none',
          },
          '& .MuiSvgIcon-root': {
            color: 'inherit',
            transition: 'color 0.3s ease',
          },
        },
      },
    },
    // Adjust icon coloring
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          transition: 'color 0.3s ease',
        },
      },
    },
    // Add IconButton styling to match links
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: mode === 'light' ? '#8C1D18' : '#A8433F',
          transition: 'color 0.3s ease',
          '&:hover': {
            color: mode === 'light' ? '#D42A24' : '#C15955',
            backgroundColor: 'transparent',
          },
          '& .MuiSvgIcon-root': {
            color: 'inherit',
          },
        },
      },
    },
    // Add consistent styling to buttons with href
    MuiButtonBase: {
      styleOverrides: {
        root: {
          // Apply link styling to any button with an href
          '&[href]': {
            transition: 'color 0.3s ease',
            textDecoration: 'none',
            '&:hover': {
              color: mode === 'light' ? '#D42A24' : '#C15955',
              textDecoration: 'none',
            },
            '&:visited, &:active, &:focus': {
              textDecoration: 'none',
            },
          }
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
});

export default getTheme; 