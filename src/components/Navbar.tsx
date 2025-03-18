'use client';

import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

// Navigation links
const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Gallery', path: '/gallery' },
  { title: 'Projects', path: '/projects' },
  { title: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mobile drawer content
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        ZENEMIG
      </Typography>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton 
              component={Link} 
              href={link.path}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          <Typography 
            variant="h6" 
            component={Link} 
            href="/" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 700, 
              textDecoration: 'none',
              color: 'text.primary',
              letterSpacing: '1px'
            }}
          >
            ZENEMIG
          </Typography>

          {/* Desktop navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Button 
                  key={link.title}
                  component={Link}
                  href={link.path}
                  color="inherit"
                  sx={{ ml: 2 }}
                >
                  {link.title}
                </Button>
              ))}
              <ThemeToggle />
            </Box>
          )}

          {/* Mobile navigation */}
          {isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ThemeToggle />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 