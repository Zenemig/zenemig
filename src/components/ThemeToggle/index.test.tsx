import '@testing-library/jest-dom';
import { renderWithProviders, screen, act } from '@/test-utils';
import { setupUserEvent } from '@/test-utils';
import ThemeToggle from './index';
import { PaletteMode } from '@mui/material';

// No need to mock themeAtom here - it's handled by the centralized test utilities

describe('<ThemeToggle />', () => {
  // Helper to set up user events
  const setupUser = () => setupUserEvent();
  
  describe('Setup', () => {
    it('renders in light mode', () => {
      // Use the centralized renderWithProviders with 'light' mode
      renderWithProviders(<ThemeToggle />, {}, 'light');
      
      // Test what the user sees
      expect(screen.getByRole('button')).toHaveTextContent('Toggle Dark Mode');
    });

    it('renders in dark mode', () => {
      // Use the centralized renderWithProviders with 'dark' mode
      renderWithProviders(<ThemeToggle />, {}, 'dark');
      
      // Test what the user sees
      expect(screen.getByRole('button')).toHaveTextContent('Toggle Light Mode');
    });
  });

  describe('Interaction', () => {
    it('calls the theme setter when clicked', async () => {
      // Use the centralized renderWithProviders and get the mockSetMode
      const { mockSetMode } = renderWithProviders(<ThemeToggle />, {}, 'light');
      
      // Use the helper to set up user events
      const user = setupUser();
      
      // Click the button
      await user.click(screen.getByRole('button'));
      
      // Verify the mock setter was called
      expect(mockSetMode).toHaveBeenCalledTimes(1);
    });
  });

  describe('Edge Cases', () => {
    it('handles undefined theme mode gracefully', () => {
      // Although this would be handled automatically by our theme provider,
      // we still test it to ensure our component is robust
      const { mockSetMode } = renderWithProviders(<ThemeToggle />, {}, undefined as PaletteMode | undefined);
      
      // The button should still be clickable
      act(() => {
        screen.getByRole('button').click();
      });
      
      // Verify the mock was called
      expect(mockSetMode).toHaveBeenCalledTimes(1);
    });
  });
}); 