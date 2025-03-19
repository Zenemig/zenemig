'use client';

import Button from '@mui/material/Button';
import { useAtom } from 'jotai';
import { themeAtom } from '@/atoms/theme';

export default function ThemeToggle(): JSX.Element {
  const [mode, setMode] = useAtom(themeAtom);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Button variant="contained" onClick={toggleTheme}>
      Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
} 