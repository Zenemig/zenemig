'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ThreeColumnLayoutProps } from './ThreeColumnLayout.types';

/**
 * A responsive three-column layout component
 * - Left column is hidden on mobile (xs)
 * - Right column is hidden on tablet (sm, md)
 * - All columns are visible on desktop and above (lg, xl)
 * - Header is only visible on mobile (xs breakpoint)
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
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  
  // Show header only on mobile (xs breakpoint)
  const showHeader = isMobile;

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
            flex: 1
          }}
        >
          {/* Left Column - Hidden on mobile, fixed 320px width */}
          {!isMobile && leftColumn && (
            <Grid 
              item
              sx={{ 
                display: { xs: 'none', sm: 'block' },
                width: 320,
                flexShrink: 0,
                flexGrow: 0,
                height: '100%'
              }}
            >
              {leftColumn}
            </Grid>
          )}

          {/* Middle Column - Always visible, fills remaining space */}
          <Grid 
            item
            xs={12}
            sm={true}
            md={true}
            lg={true}
            sx={{
              flexGrow: 1,
              height: '100%'
            }}
          >
            {middleColumn}
          </Grid>

          {/* Right Column - Hidden on tablet and mobile, fixed 320px width */}
          {isDesktop && rightColumn && (
            <Grid 
              item
              sx={{ 
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
                width: 320,
                flexShrink: 0,
                flexGrow: 0,
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