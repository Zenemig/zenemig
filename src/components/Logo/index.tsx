'use client';

import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import { LogoProps } from './Logo.types';

/**
 * Logo component that renders the logo SVG with theme-aware coloring.
 * Accepts either width or height, and calculates the other dimension proportionally.
 * 
 * @example
 * <Logo width={100} />
 * 
 * @returns A themed SVG logo component
 */
export default function Logo({ 
  width, 
  height, 
  lightColor, 
  darkColor 
}: LogoProps): JSX.Element {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === 'light';
  
  // Original SVG dimensions from the file
  const originalWidth = 2386;
  const originalHeight = 2384;
  const aspectRatio = originalWidth / originalHeight;
  
  // Calculate the missing dimension if only one is provided
  const calculatedWidth = width ?? (height ? height * aspectRatio : 80);
  const calculatedHeight = height ?? (width ? width / aspectRatio : 80 / aspectRatio);
  
  // Determine the fill color based on theme mode and props
  const fillColor = useMemo(() => {
    if (isLightMode) {
      return lightColor ?? theme.palette.primary.main;
    }
    // Always prioritize the provided darkColor for dark mode
    return darkColor ?? theme.palette.primary.light;
  }, [isLightMode, lightColor, darkColor, theme.palette.primary]);

  return (
    <SvgIcon
      component="svg"
      viewBox="0 0 2386 2384"
      sx={{
        width: calculatedWidth,
        height: calculatedHeight,
        display: 'block',
        fill: fillColor,
        color: fillColor, // Ensure color is also set for older browsers
      }}
      aria-label="Logo"
      fontSize="inherit"
      inheritViewBox
    >
      <path d="M1193 0C868.636 0 566.333 126.333 339 379C113 631.667 0 924.333 0 1257C0 1542.33 96.6667 1794.33 290 2013C483.333 2231.67 727.667 2350 1023 2368C1263 2386 1483.33 2327.67 1684 2193C1886 2058.33 2021.67 1864.33 2091 1611L1509 1500C1473 1643 1397.67 1755.67 1283 1838C1168.33 1920.33 1037 1943.67 889 1908C734.333 1872.33 617.667 1776.33 539 1620C460.333 1461.67 442.333 1290 485 1105C527.667 920.333 620.333 777.667 763 677C906.333 576.333 1063.67 538 1235 562C1404.33 584.667 1539.33 663 1640 797C1740.67 931 1778.67 1088.33 1754 1269L2333 1304C2363 997.333 2290.33 721.333 2115 476C1939.67 230.667 1698.33 80.3333 1391 25C1326.33 8.33333 1259.67 0 1193 0Z" />
    </SvgIcon>
  );
} 