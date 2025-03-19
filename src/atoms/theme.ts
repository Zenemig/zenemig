import { atom } from 'jotai';
import { PaletteMode } from '@mui/material';

// We need to mock this atom in tests, but export the real one in application code
export const themeAtom = atom<PaletteMode>('light'); 