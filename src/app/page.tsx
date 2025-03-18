'use client';

import Image from "next/image";
import { Box, Typography, Button, Grid, Stack, useTheme } from '@mui/material';
import Layout from "../components/Layout";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <Layout>
      <Grid container spacing={4} alignItems="center" sx={{ minHeight: '70vh' }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Hi, I'm Zenemig
            </Typography>
            <Typography 
              variant="h5" 
              color="primary" 
              gutterBottom
              sx={{ fontWeight: 500 }}
            >
              Developer & Photographer
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary"
              paragraph
              sx={{ maxWidth: '600px', mt: 2 }}
            >
              Welcome to my personal portfolio. I create captivating digital experiences
              through code and capture meaningful moments through my lens.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
              <Button 
                variant="contained" 
                size="large"
                href="/projects"
              >
                View Projects
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                href="/gallery"
              >
                Explore Gallery
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              position: 'relative',
              width: { xs: '280px', sm: '320px', md: '380px' },
              height: { xs: '280px', sm: '320px', md: '380px' },
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 3
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
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}
