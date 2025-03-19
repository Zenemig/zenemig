import React from 'react';
import { renderWithProviders, screen } from '@/test-utils';
import useMediaQuery from '@mui/material/useMediaQuery';
import ThreeColumnLayout from './index';

// Mock useMediaQuery for responsive testing
jest.mock('@mui/material/useMediaQuery');
const mockUseMediaQuery = useMediaQuery as jest.Mock;

// Mock Grid component
jest.mock('@mui/material/Grid', () => ({
  __esModule: true,
  default: ({ children, container, item, sx, ...props }: any) => {
    // Convert boolean breakpoint props to numbers for proper handling
    const cleanedProps = Object.entries(props).reduce((acc, [key, value]) => {
      if (['xs', 'sm', 'md', 'lg', 'xl'].includes(key) && typeof value === 'boolean') {
        return { ...acc, [key]: value ? 12 : undefined };
      }
      return { ...acc, [key]: value };
    }, {});

    return React.createElement('div', {
      'data-testid': 'mui-grid',
      'data-container': container ? 'true' : undefined,
      'data-item': item ? 'true' : undefined,
      style: sx,
      ...cleanedProps
    }, children);
  }
}));

describe('<ThreeColumnLayout />', () => {
  beforeEach(() => {
    mockUseMediaQuery.mockReset();
  });
  
  describe('Layout Behavior', () => {
    it('shows only middle column on tablet view', () => {
      // Tablet view: not mobile (false), not desktop (false)
      mockUseMediaQuery.mockReturnValueOnce(false).mockReturnValueOnce(false);
      
      renderWithProviders(
        <ThreeColumnLayout
          leftColumn={React.createElement('div', { 'data-testid': 'left-column' }, 'Left')}
          middleColumn={React.createElement('div', { 'data-testid': 'middle-column' }, 'Middle')}
          rightColumn={React.createElement('div', { 'data-testid': 'right-column' }, 'Right')}
        />
      );
      
      // Middle column should be visible
      expect(screen.getByTestId('middle-column')).toBeInTheDocument();
      // Side columns should not be visible
      expect(screen.queryByTestId('left-column')).not.toBeInTheDocument();
      expect(screen.queryByTestId('right-column')).not.toBeInTheDocument();
    });

    it('shows all columns on desktop view', () => {
      // Desktop view: not mobile (false), is desktop (true)
      mockUseMediaQuery.mockReturnValueOnce(false).mockReturnValueOnce(true);
      
      renderWithProviders(
        <ThreeColumnLayout
          leftColumn={React.createElement('div', { 'data-testid': 'left-column' }, 'Left')}
          middleColumn={React.createElement('div', { 'data-testid': 'middle-column' }, 'Middle')}
          rightColumn={React.createElement('div', { 'data-testid': 'right-column' }, 'Right')}
        />
      );
      
      // All columns should be visible
      expect(screen.getByTestId('left-column')).toBeInTheDocument();
      expect(screen.getByTestId('middle-column')).toBeInTheDocument();
      expect(screen.getByTestId('right-column')).toBeInTheDocument();
    });

    it('shows header and middle column on mobile view', () => {
      // Mobile view: is mobile (true), not desktop (false)
      mockUseMediaQuery.mockReturnValueOnce(true).mockReturnValueOnce(false);
      
      renderWithProviders(
        <ThreeColumnLayout
          headerComponent={React.createElement('div', { 'data-testid': 'header' }, 'Header')}
          middleColumn={React.createElement('div', { 'data-testid': 'middle-column' }, 'Middle')}
          leftColumn={React.createElement('div', { 'data-testid': 'left-column' }, 'Left')}
          rightColumn={React.createElement('div', { 'data-testid': 'right-column' }, 'Right')}
        />
      );
      
      // Header and middle column should be visible
      expect(screen.getByTestId('header')).toBeInTheDocument();
      expect(screen.getByTestId('middle-column')).toBeInTheDocument();
      // Side columns should not be visible
      expect(screen.queryByTestId('left-column')).not.toBeInTheDocument();
      expect(screen.queryByTestId('right-column')).not.toBeInTheDocument();
    });
  });
}); 