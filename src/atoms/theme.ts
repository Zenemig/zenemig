import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { PaletteMode } from '@mui/material';

// Get initial theme from localStorage or system preference
export const getInitialTheme = (): PaletteMode => {
  // Only access localStorage in browser environment
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      try {
        const parsed = JSON.parse(storedTheme);
        if (parsed === 'light' || parsed === 'dark') {
          return parsed;
        }
      } catch (e) {
        // Invalid stored value, fall through to system preference
      }
    }
    
    // If no valid stored theme, use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
  
  // Default to light theme on server
  return 'light';
};

// Use atomWithStorage to automatically sync with localStorage
export const themeAtom = atomWithStorage<PaletteMode>('theme', getInitialTheme()); 