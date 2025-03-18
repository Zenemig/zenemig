'use client';

import React from 'react';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useAtom } from 'jotai';
import { toggleThemeModeAtom } from '../atoms/themeAtom';

export const ThemeToggle: React.FC = () => {
  const theme = useTheme();
  const [, toggleThemeMode] = useAtom(toggleThemeModeAtom);
  
  const isDarkMode = theme.palette.mode === 'dark';
  
  return (
    <Tooltip title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
      <IconButton
        onClick={() => toggleThemeMode()}
        color="inherit"
        aria-label="toggle theme"
        sx={{ 
          ml: 1,
          '&:hover': {
            background: theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.08)' 
              : 'rgba(0, 0, 0, 0.04)'
          }
        }}
      >
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle; 