'use client';

import React from 'react';
import { Box, Container, Typography, Link as MuiLink, Stack, IconButton, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4, 
        bgcolor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f5f5f5',
        borderTop: `1px solid ${theme.palette.divider}`,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 2
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
              ZENEMIG
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Photography, Development, and more.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              © {currentYear} Zenemig. All rights reserved.
            </Typography>
          </Box>

          <Stack direction="column" spacing={1} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Follow me
            </Typography>
            <Stack direction="row" spacing={1} justifyContent={{ xs: 'center', md: 'flex-end' }}>
              <IconButton 
                component={MuiLink} 
                href="https://www.linkedin.com/in/zenemig" 
                target="_blank" 
                rel="noopener"
                aria-label="LinkedIn"
                color="primary"
                size="medium"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                component={MuiLink} 
                href="https://github.com/zenemig" 
                target="_blank" 
                rel="noopener"
                aria-label="GitHub"
                color="primary"
                size="medium"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton 
                component={MuiLink} 
                href="https://www.instagram.com/zenemig" 
                target="_blank" 
                rel="noopener"
                aria-label="Instagram"
                color="primary"
                size="medium"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton 
                component={MuiLink} 
                href="mailto:contact@zenemig.net" 
                aria-label="Email"
                color="primary"
                size="medium"
              >
                <EmailIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 