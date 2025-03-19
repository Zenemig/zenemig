import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { mockJotaiAtoms, setupMockThemeAtom } from '@/mocks/jotai';
import getTheme from '@/theme';

// Re-export everything from @testing-library/react
export * from '@testing-library/react';

/**
 * Setup user event for testing interactions
 */
export const setupUserEvent = () => userEvent.setup();

/**
 * Custom render function that wraps components with necessary providers
 */
function renderWithProviders(
  ui: ReactElement,
  options: Omit<RenderOptions, 'wrapper'> & { mode?: PaletteMode } = {}
) {
  const { mode = 'light', ...renderOptions } = options;
  
  // Setup theme atom mock
  const { mockSetMode } = setupMockThemeAtom(mode);
  
  // Create theme instance
  const theme = getTheme(mode);
  
  // Provider wrapper with actual ThemeProvider
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    mockSetMode
  };
}

// Initialize test environment
mockJotaiAtoms();

export { renderWithProviders }; 