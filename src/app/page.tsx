import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAtom } from 'jotai';
import { themeAtom } from '@/atoms/theme';

export default function Home() {
  const [mode, setMode] = useAtom(themeAtom);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

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
        <Button variant="contained" onClick={toggleTheme}>
          Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Box>
    </Container>
  );
}
