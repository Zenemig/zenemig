import { TypographyProps } from '@mui/material/Typography';

/**
 * Props for the DisplayText component
 * Extends Typography props but overrides the variant prop
 */
export interface DisplayTextProps extends Omit<TypographyProps, 'variant'> {
  /** The content to be displayed */
  children: React.ReactNode;
} 