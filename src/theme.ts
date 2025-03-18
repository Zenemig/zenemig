import { createTheme, PaletteMode, Theme } from '@mui/material';

// Define spacing constants based on Zenemig's design system
const SPACING = {
  smallest: 5,
  small: 10,
  regular: 15,
  big: 30,
  biggest: 60,
};

// Define color palette for both light and dark modes
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode - Based on Zenemig's branding
          primary: {
            main: '#711f4d', // Primary brand color from Zenemig
            light: '#8a3967',
            dark: '#5a1940',
          },
          secondary: {
            main: '#00ab6c', // Medium green from Zenemig
            light: '#33bb87',
            dark: '#008a57',
          },
          background: {
            default: '#ffffff', // White background from Zenemig
            paper: '#f5f5f5',
          },
          text: {
            primary: '#171516', // Dark text color from Zenemig
            secondary: '#3c3c3c', // Secondary text color from Zenemig
          },
          social: {
            linkedin: '#0077b5', // LinkedIn blue from Zenemig
            instagram: {
              gradient1: '#fdf497',
              gradient2: '#fd5949',
              gradient3: '#d6249f',
              gradient4: '#c13584',
            },
            github: '#4078c0', // Github color from Zenemig
            medium: '#00ab6c', // Medium color from Zenemig
          },
        }
      : {
          // Dark mode - Based on Zenemig's dark mode
          primary: {
            main: '#8a3967', // Lighter version for dark mode
            light: '#a35a82',
            dark: '#711f4d',
          },
          secondary: {
            main: '#33bb87', // Lighter green for dark mode
            light: '#5ccca0',
            dark: '#00ab6c',
          },
          background: {
            default: '#121212', // Dark background
            paper: '#1e1e1e',
          },
          text: {
            primary: '#ffffff', // White text for dark mode
            secondary: '#cccccc', // Light gray text for dark mode
          },
          social: {
            linkedin: '#0077b5',
            instagram: {
              gradient1: '#fdf497',
              gradient2: '#fd5949',
              gradient3: '#d6249f',
              gradient4: '#c13584',
            },
            github: '#4078c0',
            medium: '#00ab6c',
          },
        }),
  },
  typography: {
    // Using Zenemig's font definitions
    fontFamily: "'Roboto', sans-serif", // $font-body from Zenemig
    h1: {
      fontFamily: "'Roboto Condensed', sans-serif", // $font-title from Zenemig
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Roboto Condensed', sans-serif",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "'Roboto Condensed', sans-serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Roboto Condensed', sans-serif",
      fontWeight: 500,
    },
    h5: {
      fontFamily: "'Roboto Condensed', sans-serif",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "'Roboto Condensed', sans-serif",
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: "'Roboto', sans-serif",
    },
    subtitle2: {
      fontFamily: "'Roboto', sans-serif",
    },
    body1: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '1rem',
    },
    body2: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '0.875rem',
    },
    button: {
      fontFamily: "'Roboto Condensed', sans-serif",
      fontWeight: 600,
      textTransform: 'none' as const,
    },
    caption: {
      fontFamily: "'Roboto', sans-serif",
    },
    overline: {
      fontFamily: "'Unica One', cursive", // $font-display from Zenemig
      textTransform: 'uppercase' as const,
    },
  },
  spacing: (factor: number) => `${factor * 5}px`, // Base spacing unit of 5px (smallest spacing)
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: `${SPACING.small}px ${SPACING.regular}px`,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: SPACING.regular,
          paddingRight: SPACING.regular,
          '@media (min-width: 600px)': {
            paddingLeft: SPACING.big,
            paddingRight: SPACING.big,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          marginBottom: SPACING.regular,
        },
      },
    },
  },
});

// Create theme instances with proper casting
export const lightTheme = createTheme(getDesignTokens('light') as any);
export const darkTheme = createTheme(getDesignTokens('dark') as any);

// Add custom typing for social colors
declare module '@mui/material/styles' {
  interface Palette {
    social: {
      linkedin: string;
      instagram: {
        gradient1: string;
        gradient2: string;
        gradient3: string;
        gradient4: string;
      };
      github: string;
      medium: string;
    };
  }
  interface PaletteOptions {
    social?: {
      linkedin?: string;
      instagram?: {
        gradient1?: string;
        gradient2?: string;
        gradient3?: string;
        gradient4?: string;
      };
      github?: string;
      medium?: string;
    };
  }
}

// Theme factory function with proper casting
export const createAppTheme = (mode: PaletteMode): Theme => 
  createTheme(getDesignTokens(mode) as any);

export default createAppTheme; 