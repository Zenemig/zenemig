'use client';

import React, { useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { useAtom } from 'jotai';
import { initializeThemeModeAtom, themeModeAtom } from '../atoms/themeAtom';
import { createAppTheme } from '../theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useAtom(themeModeAtom);
  const [, initializeThemeMode] = useAtom(initializeThemeModeAtom);

  // Initialize theme mode on client side
  useEffect(() => {
    initializeThemeMode();
  }, [initializeThemeMode]);

  // Create theme based on current mode
  const theme = createAppTheme(themeMode);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider; 