'use client';

import Image from "next/image";
import { Box, Typography, Button, Grid, Stack, Container, useTheme, Paper } from '@mui/material';
import Layout from "../components/Layout";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Home() {
  const theme = useTheme();
  
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={6} alignItems="center" sx={{ minHeight: '70vh' }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography 
                className="display-text"
                variant="overline"
                component="p" 
                sx={{ 
                  color: theme.palette.primary.main,
                  mb: 1,
                  fontSize: '1rem',
                  letterSpacing: '0.1em'
                }}
              >
                WELCOME TO MY PORTFOLIO
              </Typography>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontFamily: "'Roboto Condensed', sans-serif",
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2
                }}
              >
                Hi, I'm Zenemig
              </Typography>
              <Typography 
                variant="h5" 
                color="secondary" 
                gutterBottom
                sx={{ 
                  fontWeight: 500,
                  fontFamily: "'Roboto Condensed', sans-serif",
                  letterSpacing: '0.02em'
                }}
              >
                Developer & Photographer
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                paragraph
                sx={{ 
                  maxWidth: '600px', 
                  mt: 3, 
                  mb: 4,
                  fontSize: '1.125rem',
                  lineHeight: 1.6
                }}
              >
                Welcome to my personal portfolio. I create captivating digital experiences
                through code and capture meaningful moments through my lens.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                <Button 
                  variant="contained" 
                  size="large"
                  href="/projects"
                  color="primary"
                  sx={{ 
                    px: 3,
                    py: 1.5,
                    fontFamily: "'Roboto Condensed', sans-serif",
                    fontWeight: 600
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  View Projects
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  href="/gallery"
                  color="secondary"
                  sx={{ 
                    px: 3,
                    py: 1.5,
                    fontFamily: "'Roboto Condensed', sans-serif",
                    fontWeight: 600,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2
                    }
                  }}
                >
                  Explore Gallery
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
              elevation={0}
              sx={{
                position: 'relative',
                width: { xs: '280px', sm: '320px', md: '380px' },
                height: { xs: '280px', sm: '320px', md: '380px' },
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: theme.palette.mode === 'dark' 
                  ? '0 20px 40px rgba(0,0,0,0.4)' 
                  : '0 20px 40px rgba(0,0,0,0.1)',
                border: `1px solid ${theme.palette.mode === 'dark' 
                  ? 'rgba(255,255,255,0.05)' 
                  : 'rgba(0,0,0,0.05)'}`
              }}
            >
              {/* Placeholder for profile image - update with actual image later */}
              <Image
                src="/profile-placeholder.jpg"
                alt="Zenemig profile"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 280px, (max-width: 1200px) 320px, 380px"
                priority
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
