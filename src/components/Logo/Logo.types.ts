/**
 * Logo component type definitions
 */

export interface LogoProps {
  /** The width of the logo in pixels. If only width is provided, height will be calculated proportionally. */
  width?: number;
  
  /** The height of the logo in pixels. If only height is provided, width will be calculated proportionally. */
  height?: number;
  
  /** Color to use in light mode. If not provided, the theme's primary color will be used. */
  lightColor?: string;
  
  /** Color to use in dark mode. If not provided, the theme's primary.light color will be used. */
  darkColor?: string;
} 