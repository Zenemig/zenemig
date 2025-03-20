import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    displayFont: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    displayFont?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayFont: true;
  }
} 