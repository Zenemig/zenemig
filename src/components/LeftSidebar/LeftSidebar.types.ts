/**
 * Props for the LeftSidebar component that displays user profile and contact information
 */
export interface LeftSidebarProps {
  /** User's professional title */
  title?: string;
  /** User's current status */
  status?: string;
  /** Link to user's status */
  statusLink?: string;
  /** User's email address */
  email?: string;
  /** User's social media links */
  socialLinks?: {
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
} 