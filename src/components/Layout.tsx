'use client';

import React from 'react';
import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          flex: '1 0 auto',
          py: { xs: 4, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout; 