import '@testing-library/jest-dom';
import { renderWithProviders, screen } from '@/test-utils';
import ThemeProvider from './index';
import { themeProviderFixtures } from '@/fixtures/theme-provider-component';

describe('<ThemeProvider />', () => {
  describe('Setup', () => {
    it('renders children correctly', () => {
      // Render the component with children
      renderWithProviders(
        <ThemeProvider>
          <div data-testid="test-child">Test Content</div>
        </ThemeProvider>
      );
      
      // Verify that children are rendered
      expect(screen.getByTestId('test-child')).toBeInTheDocument();
      expect(screen.getByTestId('test-child')).toHaveTextContent('Test Content');
    });
  });

  describe('Edge Cases', () => {
    it('handles null children', () => {
      // Test with null children from fixtures
      renderWithProviders(
        <ThemeProvider>
          {themeProviderFixtures.minimalProps.children}
        </ThemeProvider>
      );
      
      // Fix: Use getAllByTestId instead of getByTestId to handle multiple elements
      const themeProviders = screen.getAllByTestId('mui-theme-provider');
      expect(themeProviders.length).toBeGreaterThan(0);
      expect(themeProviders[0]).toBeInTheDocument();
    });

    it('handles multiple children', () => {
      // Test with multiple children
      renderWithProviders(
        <ThemeProvider>
          <div data-testid="test-child-1">Child 1</div>
          <div data-testid="test-child-2">Child 2</div>
        </ThemeProvider>
      );
      
      // Verify all children are rendered
      expect(screen.getByTestId('test-child-1')).toBeInTheDocument();
      expect(screen.getByTestId('test-child-2')).toBeInTheDocument();
    });
  });
}); 