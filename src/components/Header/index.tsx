'use client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { HeaderProps } from './Header.types';

/**
 * Header component with styling matching the zenemig.net website
 */
function Header({
  title = 'Zenemig',
  logo,
  actions
}: HeaderProps): JSX.Element {
  const theme = useTheme();
  
  return (
    <AppBar 
      position="sticky" 
      color="primary"
      elevation={0}
      sx={{
        borderBottom: `1px solid ${theme.palette.divider}`,
        top: 0,
        zIndex: theme.zIndex.appBar,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          height: 72,
          px: { xs: 2, sm: 3 },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {logo && (
            <Box sx={{ mr: 2 }}>
              {logo}
            </Box>
          )}
          
          <Typography 
            variant="h6" 
            component="h1"
            sx={{ 
              fontFamily: 'var(--playfair-font), serif',
              fontWeight: 600,
              letterSpacing: 0.5,
            }}
          >
            {title}
          </Typography>
        </Box>
        
        {actions && (
          <Box>
            {actions}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header; 