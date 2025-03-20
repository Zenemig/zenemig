import React from 'react';
import '@testing-library/jest-dom';
import { renderWithProviders, screen } from '@/test-utils';
import { setupUserEvent } from '@/test-utils';
import ThemeToggle from './index';

describe('<ThemeToggle />', () => {
  describe('Setup', () => {
    it('renders with correct initial state in light mode', () => {
      renderWithProviders(<ThemeToggle />);
      
      // Verify the button shows dark mode icon
      const button = screen.getByRole('button', { name: 'Toggle dark mode' });
      expect(button).toBeInTheDocument();
    });

    it('renders with correct initial state in dark mode', () => {
      renderWithProviders(<ThemeToggle />, { mode: 'dark' });
      
      // Verify the button shows light mode icon
      const button = screen.getByRole('button', { name: 'Toggle light mode' });
      expect(button).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('toggles theme when clicked', async () => {
      const user = setupUserEvent();
      const { mockSetMode } = renderWithProviders(<ThemeToggle />);
      
      // Click the toggle button
      const button = screen.getByRole('button');
      await user.click(button);
      
      // Verify the theme was toggled
      expect(mockSetMode).toHaveBeenCalledTimes(1);
      expect(mockSetMode).toHaveBeenCalledWith(expect.any(Function));
    });
  });
}); 