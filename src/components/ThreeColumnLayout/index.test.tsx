import { renderWithProviders, screen } from '@/test-utils';
import useMediaQuery from '@mui/material/useMediaQuery';
import ThreeColumnLayout from './index';

// Mock the useMediaQuery hook
jest.mock('@mui/material/useMediaQuery');
const mockUseMediaQuery = useMediaQuery as jest.Mock;

describe('<ThreeColumnLayout />', () => {
  // Reset mocks before each test
  beforeEach(() => {
    mockUseMediaQuery.mockReset();
  });
  
  describe('Setup', () => {
    it('renders the main middle column', () => {
      // Default behavior for non-mobile (show left column, hide right column)
      // First call to useMediaQuery is for isMobile (should be false)
      // Second call to useMediaQuery is for isDesktop (should be false)
      mockUseMediaQuery.mockReturnValueOnce(false).mockReturnValueOnce(false);
      
      renderWithProviders(
        <ThreeColumnLayout
          middleColumn={<div data-testid="middle-column">Middle Column</div>}
        />
      );
      
      expect(screen.getByTestId('middle-column')).toBeInTheDocument();
      expect(screen.getByText('Middle Column')).toBeInTheDocument();
    });

    it('renders all columns when provided on desktop', () => {
      // Desktop view: not mobile, is desktop
      // First call to useMediaQuery is for isMobile (should be false)
      // Second call to useMediaQuery is for isDesktop (should be true)
      mockUseMediaQuery.mockReturnValueOnce(false).mockReturnValueOnce(true);
      
      renderWithProviders(
        <ThreeColumnLayout
          leftColumn={<div data-testid="left-column">Left Column</div>}
          middleColumn={<div data-testid="middle-column">Middle Column</div>}
          rightColumn={<div data-testid="right-column">Right Column</div>}
        />
      );
      
      expect(screen.getByTestId('middle-column')).toBeInTheDocument();
      expect(screen.getByTestId('left-column')).toBeInTheDocument();
      expect(screen.getByTestId('right-column')).toBeInTheDocument();
    });

    it('includes header component when provided on mobile', () => {
      // Mobile view: is mobile, not desktop  
      // First call to useMediaQuery is for isMobile (should be true)
      // Second call to useMediaQuery is for isDesktop (should be false)
      mockUseMediaQuery.mockReturnValueOnce(true).mockReturnValueOnce(false);
      
      renderWithProviders(
        <ThreeColumnLayout
          headerComponent={<div data-testid="header">Header Component</div>}
          middleColumn={<div data-testid="middle-column">Middle Column</div>}
        />
      );
      
      // The header should be visible on mobile
      expect(screen.getByTestId('header')).toBeInTheDocument();
      expect(screen.getByText('Header Component')).toBeInTheDocument();
    });
  });
}); 