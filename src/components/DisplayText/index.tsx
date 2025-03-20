import Typography from '@mui/material/Typography';
import { DisplayTextProps } from './DisplayText.types';

/**
 * A specialized Typography component for display text using Unica One font
 * 
 * @param {DisplayTextProps} props - The component props
 * @returns {JSX.Element} A Typography component with display text styling
 */
export default function DisplayText({ 
  children, 
  ...props 
}: DisplayTextProps): JSX.Element {
  return (
    <Typography 
      variant="displayFont" 
      {...props}
    >
      {children}
    </Typography>
  );
} 