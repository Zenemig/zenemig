import { renderWithProviders, screen } from '@/test-utils';
import ThreeColumnLayout from './index';

describe('<ThreeColumnLayout />', () => {
  describe('Setup', () => {
    it('renders the main middle column', () => {
      renderWithProviders(
        <ThreeColumnLayout
          middleColumn={<div data-testid="middle-column">Middle Column</div>}
        />
      );
      
      expect(screen.getByTestId('middle-column')).toBeInTheDocument();
      expect(screen.getByText('Middle Column')).toBeInTheDocument();
    });

    it('renders all columns when provided', () => {
      renderWithProviders(
        <ThreeColumnLayout
          leftColumn={<div data-testid="left-column">Left Column</div>}
          middleColumn={<div data-testid="middle-column">Middle Column</div>}
          rightColumn={<div data-testid="right-column">Right Column</div>}
        />
      );
      
      // The test environment doesn't simulate different viewport sizes by default,
      // so all columns should be in the document but might be hidden via CSS
      expect(screen.getByTestId('middle-column')).toBeInTheDocument();
      
      // Note: The actual visibility of these elements would depend on the viewport size
      // which is difficult to test in a headless environment without additional mocking
      // This test just ensures that the component accepts and renders the columns
      expect(screen.queryByTestId('left-column')).toBeInTheDocument();
      expect(screen.queryByTestId('right-column')).toBeInTheDocument();
    });

    it('includes header component when provided', () => {
      renderWithProviders(
        <ThreeColumnLayout
          headerComponent={<div data-testid="header">Header Component</div>}
          middleColumn={<div data-testid="middle-column">Middle Column</div>}
        />
      );
      
      // In the test environment, we can't properly test the conditional rendering
      // based on screen size, but we can test that the component is rendered when provided
      // On mobile devices, the header should be visible
      expect(screen.getByTestId('header')).toBeInTheDocument();
      expect(screen.getByText('Header Component')).toBeInTheDocument();
    });
  });
}); 