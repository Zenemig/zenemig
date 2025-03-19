import { ReactNode } from 'react';

/**
 * Props for the Header component
 */
export interface HeaderProps {
  /** Title to display in the header */
  title?: string;
  
  /** Optional logo to display in the header */
  logo?: ReactNode;
  
  /** Optional actions to display in the header */
  actions?: ReactNode;
} 