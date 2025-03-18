import { atom } from 'jotai';
import { PaletteMode } from '@mui/material';

// Default to system preference or light mode
const getInitialThemeMode = (): PaletteMode => {
  if (typeof window !== 'undefined') {
    const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
    if (savedMode) return savedMode;
    
    // Check system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  }
  
  // Default to light mode on server
  return 'light';
};

// Theme mode atom
export const themeModeAtom = atom<PaletteMode>('light');

// Initialize atom on client side
export const initializeThemeModeAtom = atom(
  (get) => get(themeModeAtom),
  (get, set) => {
    const initialMode = getInitialThemeMode();
    set(themeModeAtom, initialMode);
  }
);

// Toggle theme mode atom
export const toggleThemeModeAtom = atom(
  (get) => get(themeModeAtom),
  (get, set) => {
    const currentMode = get(themeModeAtom);
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('themeMode', newMode);
    }
    
    set(themeModeAtom, newMode);
  }
); 