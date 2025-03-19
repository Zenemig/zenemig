import '@testing-library/jest-dom';
import { renderWithProviders, screen } from '@/test-utils';
import ThemeProvider from './index';

describe('<ThemeProvider />', () => {
  describe('Setup', () => {
    it('renders children correctly', () => {
      renderWithProviders(
        <ThemeProvider>
          <div data-testid="test-child">Test Content</div>
        </ThemeProvider>
      );
      
      expect(screen.getByTestId('test-child')).toBeInTheDocument();
      expect(screen.getByTestId('test-child')).toHaveTextContent('Test Content');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty children', () => {
      renderWithProviders(
        <ThemeProvider>
          <></>
        </ThemeProvider>
      );
      
      // The component should render without crashing
      expect(document.body).toBeInTheDocument();
    });

    it('handles multiple children', () => {
      renderWithProviders(
        <ThemeProvider>
          <div data-testid="test-child-1">Child 1</div>
          <div data-testid="test-child-2">Child 2</div>
        </ThemeProvider>
      );
      
      expect(screen.getByTestId('test-child-1')).toBeInTheDocument();
      expect(screen.getByTestId('test-child-2')).toBeInTheDocument();
    });
  });
}); 