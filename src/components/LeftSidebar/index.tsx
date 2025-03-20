'use client';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
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
 *   statusLink="https://www.nerdy.com"
 *   email="hola@zenemig.net"
 *   socialLinks={{
 *     github: "https://github.com/zenemig",
 *     linkedin: "https://linkedin.com/in/zenemig",
 *     instagram: "https://instagram.com/zenemig"
 *   }}
 * />
 */
function LeftSidebar({
  title = 'Sr. Front-End Engineer',
  status = 'Varsity Tutors',
  statusLink = 'https://www.varsitytutors.com',
  email = 'hola@zenemig.net',
  socialLinks = {
    github: 'https://github.com/zenemig',
    linkedin: 'https://linkedin.com/in/zenemig',
    instagram: 'https://instagram.com/zenemig.photography'
  }
}: LeftSidebarProps): JSX.Element {
  return (
    <Paper 
      sx={{ 
        p: 4, 
        height: '100%',
        borderRadius: 0, 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'background.paper',
        width: '100%'
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
            aria-label="Instagram"
          >
            <InstagramIcon fontSize="medium" />
          </Link>
        )}
        {email && (
          <Link
            href={`mailto:${email}`}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <EmailIcon />
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
      <Link 
        href={statusLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography 
          variant="subtitle1" 
          align="center" 
          sx={{ 
            mb: 4,
            fontWeight: 500
          }}
        >
          {status}
        </Typography>
      </Link>
      
      {/* Theme Toggle */}
      <Box sx={{ mt: 'auto' }}>
        <ThemeToggle />
      </Box>
    </Paper>
  );
}

export { LeftSidebar }; 