import { ReactNode } from 'react';

/**
 * Props for the ThreeColumnLayout component
 */
export interface ThreeColumnLayoutProps {
  /** Content for the left column (hidden on mobile, fixed 320px width) */
  leftColumn?: ReactNode;
  
  /** Content for the middle column (main content, takes remaining width) */
  middleColumn: ReactNode;
  
  /** Content for the right column (hidden on tablet and mobile, fixed 320px width) */
  rightColumn?: ReactNode;
  
  /** Header component to display only on mobile (xs breakpoint) */
  headerComponent?: ReactNode;
  
  /** Optional custom spacing between columns */
  spacing?: number;
} 