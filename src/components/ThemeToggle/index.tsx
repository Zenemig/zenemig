'use client';

import { useAtom } from 'jotai';
import IconButton from '@mui/material/IconButton';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { themeAtom } from '@/atoms/theme';

export default function ThemeToggle(): JSX.Element {
  const [mode, setMode] = useAtom(themeAtom);
  const isDarkMode = mode === 'dark';
  
  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <IconButton
      onClick={toggleTheme}
      color="primary"
      aria-label={`Toggle ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
} 