import { ReactNode } from 'react';

/**
 * Props for the ThreeColumnLayout component
 */
export interface ThreeColumnLayoutProps {
  /** Content for the left column (visible on tablet and desktop, fixed 320px width) */
  leftColumn?: ReactNode;
  
  /** Content for the middle column (main content, takes remaining width, always visible) */
  middleColumn: ReactNode;
  
  /** Content for the right column (only visible on desktop, fixed 320px width) */
  rightColumn?: ReactNode;
  
  /** Header component to display only on mobile */
  headerComponent?: ReactNode;
  
  /** Optional custom spacing between columns */
  spacing?: number;
} 