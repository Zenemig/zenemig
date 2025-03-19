'use client';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import { LeftSidebarProps } from './LeftSidebar.types';

/**
 * LeftSidebar component that displays user profile information, social links,
 * and contact details in a vertical layout.
 *
 * @example
 * <LeftSidebar
 *   title="Front-End Developer"
 *   status="Available for Hire"
 *   phoneNumber="+56 9 8500 6191"
 *   email="hola@zenemig.net"
 *   socialLinks={{
 *     github: "https://github.com/zenemig",
 *     linkedin: "https://linkedin.com/in/zenemig",
 *     instagram: "https://instagram.com/zenemig"
 *   }}
 * />
 */
function LeftSidebar({
  title = 'Front-End Developer',
  status = 'Available for Hire',
  phoneNumber = '+56 9 8500 6191',
  email = 'hola@zenemig.net',
  socialLinks = {
    github: 'https://github.com/zenemig',
    linkedin: 'https://linkedin.com/in/zenemig',
    instagram: 'https://instagram.com/zenemig'
  }
}: LeftSidebarProps): JSX.Element {
  return (
    <Paper 
      sx={{ 
        p: 3, 
        height: '100%',
        borderRadius: 0, 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      elevation={0}
    >
      {/* Logo */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <Logo width={160} />
      </Box>
      
      {/* Social Links */}
      <Stack 
        direction="row" 
        spacing={2} 
        sx={{ mb: 4, justifyContent: 'center' }}
      >
        {socialLinks.github && (
          <Link 
            href={socialLinks.github}
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ color: 'text.primary' }}
            aria-label="GitHub"
          >
            <GitHubIcon fontSize="medium" />
          </Link>
        )}
        {socialLinks.linkedin && (
          <Link 
            href={socialLinks.linkedin}
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ color: 'text.primary' }}
            aria-label="LinkedIn"
          >
            <LinkedInIcon fontSize="medium" />
          </Link>
        )}
        {socialLinks.instagram && (
          <Link 
            href={socialLinks.instagram}
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ color: 'text.primary' }}
            aria-label="Instagram"
          >
            <InstagramIcon fontSize="medium" />
          </Link>
        )}
      </Stack>
      
      {/* Title */}
      <Typography 
        variant="h5" 
        component="h1" 
        align="center" 
        sx={{ 
          mb: 1,
          fontWeight: 500,
          color: 'text.primary'
        }}
      >
        {title}
      </Typography>
      
      {/* Status */}
      <Typography 
        variant="subtitle1" 
        align="center" 
        sx={{ 
          mb: 4,
          color: 'error.main',
          fontWeight: 500
        }}
      >
        {status}
      </Typography>
      
      {/* Contact Information */}
      <Stack spacing={2} sx={{ width: '100%', mb: 4 }}>
        {phoneNumber && (
          <Link 
            href={`tel:${phoneNumber}`}
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'text.primary'
            }}
          >
            <PhoneIcon sx={{ mr: 1, color: 'error.main' }} />
            <Typography>{phoneNumber}</Typography>
          </Link>
        )}
        {email && (
          <Link 
            href={`mailto:${email}`}
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'text.primary'
            }}
          >
            <EmailIcon sx={{ mr: 1, color: 'error.main' }} />
            <Typography>{email}</Typography>
          </Link>
        )}
      </Stack>
      
      {/* Theme Toggle */}
      <Box sx={{ mt: 'auto' }}>
        <ThemeToggle />
      </Box>
    </Paper>
  );
}

export { LeftSidebar }; 