'use client';

import React from 'react';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
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
        size="medium"
        sx={{ 
          ml: 2,
          color: theme.palette.text.secondary,
          transition: 'all 0.2s ease',
          '&:hover': {
            background: 'transparent',
            color: isDarkMode 
              ? theme.palette.secondary.light 
              : theme.palette.primary.main,
          }
        }}
      >
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle; 