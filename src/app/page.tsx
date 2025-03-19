import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          gap: 4,
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to Zenemig
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          A Next.js 13+ Project with MUI and TypeScript
        </Typography>
        <ThemeToggle />
      </Box>
    </Container>
  );
}
