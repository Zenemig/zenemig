'use client';

import React from 'react';
import { Box, Container, Typography, Link as MuiLink, Stack, IconButton, useTheme, SvgIcon } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import Image from 'next/image';
import { SvgIconProps } from '@mui/material';

// Medium icon component since MUI doesn't have one
const MediumIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </SvgIcon>
);

export const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  // Social media icon styles based on Zenemig's branding
  const socialIcons = [
    { 
      icon: <LinkedInIcon />, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/zenemig',
      color: theme.palette.social.linkedin
    },
    { 
      icon: <GitHubIcon />, 
      label: 'GitHub', 
      href: 'https://github.com/zenemig',
      color: theme.palette.social.github
    },
    { 
      icon: <InstagramIcon />, 
      label: 'Instagram', 
      href: 'https://www.instagram.com/zenemig',
      color: theme.palette.mode === 'light' ? theme.palette.social.instagram.gradient4 : theme.palette.social.instagram.gradient1
    },
    { 
      icon: <MediumIcon />, 
      label: 'Medium', 
      href: 'https://medium.com/@zenemig',
      color: theme.palette.social.medium
    },
    { 
      icon: <EmailIcon />, 
      label: 'Email', 
      href: 'mailto:contact@zenemig.net',
      color: theme.palette.primary.main
    }
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4, 
        bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : 'background.default',
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
            gap: 3
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ mb: 2, maxWidth: 120 }}>
              <Image 
                src="/logo.svg" 
                alt="Zenemig Logo" 
                width={120} 
                height={48} 
                priority
              />
            </Box>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ 
                fontFamily: "'Roboto', sans-serif",
                mb: 1,
                maxWidth: 300
              }}
            >
              Photography, Development, and Creative Solutions.
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ 
                mt: 2, 
                fontSize: '0.75rem',
                opacity: 0.8
              }}
            >
              © {currentYear} Zenemig. All rights reserved.
            </Typography>
          </Box>

          <Stack direction="column" spacing={2} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography 
              variant="subtitle2" 
              sx={{ 
                fontWeight: 600, 
                fontFamily: "'Roboto Condensed', sans-serif",
                letterSpacing: 0.5,
                color: theme.palette.text.primary
              }}
            >
              CONNECT WITH ME
            </Typography>
            <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-end' }}>
              {socialIcons.map((social) => (
                <IconButton 
                  key={social.label}
                  component={MuiLink} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener"
                  aria-label={social.label}
                  size="medium"
                  sx={{ 
                    color: theme.palette.text.secondary,
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: social.color
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 