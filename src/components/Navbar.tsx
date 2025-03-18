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
  ListItemText,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';

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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', padding: theme.spacing(2) }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <Image 
          src="/logo.svg" 
          alt="Zenemig Logo" 
          width={150} 
          height={60} 
          priority
        />
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton 
              component={Link} 
              href={link.path}
              sx={{ 
                textAlign: 'center',
                fontFamily: "'Roboto Condensed', sans-serif",
                '&:hover': {
                  color: theme.palette.primary.main
                }
              }}
            >
              <ListItemText 
                primary={link.title} 
                primaryTypographyProps={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 600
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        color="default" 
        elevation={0} 
        sx={{ 
          borderBottom: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'}`,
          backgroundColor: theme.palette.background.default
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ padding: { xs: theme.spacing(1), md: theme.spacing(0) } }}>
            <Box 
              component={Link} 
              href="/" 
              sx={{ 
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none'
              }}
            >
              <Image 
                src="/logo.svg" 
                alt="Zenemig Logo" 
                width={120} 
                height={48} 
                priority
              />
            </Box>

            {/* Desktop navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {navLinks.map((link) => (
                  <Button 
                    key={link.title}
                    component={Link}
                    href={link.path}
                    color="inherit"
                    sx={{ 
                      ml: 2, 
                      fontFamily: "'Roboto Condensed', sans-serif",
                      fontWeight: 600,
                      fontSize: '1rem',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        backgroundColor: 'transparent'
                      }
                    }}
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
                  aria-label="open menu"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    ml: 1,
                    color: theme.palette.text.primary
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
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
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            backgroundColor: theme.palette.background.default
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 