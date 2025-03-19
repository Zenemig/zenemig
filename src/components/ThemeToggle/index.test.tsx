import React from 'react';
import '@testing-library/jest-dom';
import { renderWithProviders, screen } from '@/test-utils';
import { setupUserEvent } from '@/test-utils';
import ThemeToggle from './index';

// Mock the Switch component
jest.mock('@mui/material/Switch', () => ({
  __esModule: true,
  default: ({ checked, onChange, inputProps = {}, ...props }: any) => 
    React.createElement('input', {
      type: 'checkbox',
      checked,
      onChange,
      'aria-label': inputProps['aria-label'],
      'data-testid': 'mui-switch',
      ...props
    })
}));

describe('<ThemeToggle />', () => {
  describe('Setup', () => {
    it('renders with correct initial state in light mode', () => {
      const { mockSetMode } = renderWithProviders(<ThemeToggle />);
      
      // Verify the toggle is in light mode
      const toggle = screen.getByTestId('mui-switch');
      expect(toggle).not.toBeChecked();
    });

    it('renders with correct initial state in dark mode', () => {
      const { mockSetMode } = renderWithProviders(<ThemeToggle />, { mode: 'dark' });
      
      // Verify the toggle is in dark mode
      const toggle = screen.getByTestId('mui-switch');
      expect(toggle).toBeChecked();
    });
  });

  describe('Interaction', () => {
    it('toggles theme when clicked', async () => {
      const user = setupUserEvent();
      const { mockSetMode } = renderWithProviders(<ThemeToggle />);
      
      // Click the toggle
      const toggle = screen.getByTestId('mui-switch');
      await user.click(toggle);
      
      // Verify the theme was toggled
      expect(mockSetMode).toHaveBeenCalledTimes(1);
      expect(mockSetMode).toHaveBeenCalledWith(expect.any(Function));
    });
  });
}); 