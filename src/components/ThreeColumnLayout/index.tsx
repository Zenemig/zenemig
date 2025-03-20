'use client';

import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ThreeColumnLayoutProps } from './ThreeColumnLayout.types';

/**
 * A responsive three-column layout component
 * - Mobile (xs): Only middle column and header visible
 * - Tablet (sm, md): Left and middle columns visible
 * - Desktop (lg, xl): All three columns visible
 */
function ThreeColumnLayout({
  leftColumn,
  middleColumn,
  rightColumn,
  headerComponent,
  spacing = 0
}: ThreeColumnLayoutProps): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  
  // Show header only on mobile
  const showHeader = isMobile;

  // Calculate middle column width based on visible columns
  const middleColumnWidth = useMemo(() => {
    if (isDesktop) {
      // Desktop: account for both left and right columns
      const sideColumnsWidth = (leftColumn ? 320 : 0) + (rightColumn ? 320 : 0);
      return sideColumnsWidth > 0 ? `calc(100% - ${sideColumnsWidth}px)` : '100%';
    }
    
    if (isTablet) {
      // Tablet: account for left column only
      return leftColumn ? 'calc(100% - 320px)' : '100%';
    }
    
    // Mobile: full width
    return '100%';
  }, [isDesktop, isTablet, leftColumn, rightColumn]);

  return (
    <>
      {/* Conditionally render header only on mobile */}
      {showHeader && headerComponent}
      
      <Box 
        sx={{ 
          width: '100%',
          maxWidth: '100%',
          overflow: 'hidden',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Grid 
          container 
          spacing={spacing} 
          sx={{ 
            height: '100%',
            width: '100%'
          }}
        >
          {/* Left Column - Visible on tablet and desktop */}
          {(isTablet || isDesktop) && leftColumn && (
            <Grid 
              item
              sx={{ 
                width: '320px',
                height: '100%'
              }}
            >
              {leftColumn}
            </Grid>
          )}

          {/* Middle Column - Always visible, fills remaining space */}
          <Grid 
            item
            sx={{
              width: middleColumnWidth,
              height: '100%',
            }}
          >
            {middleColumn}
          </Grid>

          {/* Right Column - Only visible on desktop */}
          {isDesktop && rightColumn && (
            <Grid
              item
              sx={{
                width: '320px',
                height: '100%'
              }}
            >
              {rightColumn}
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
}

export default ThreeColumnLayout; 