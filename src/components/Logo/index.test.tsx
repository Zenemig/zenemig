import { renderWithProviders, screen } from '@/test-utils';
import Logo from './index';

describe('<Logo />', () => {
  describe('Setup', () => {
    it('renders in default state', () => {
      renderWithProviders(<Logo />);
      const logoElement = screen.getByLabelText('Logo');
      expect(logoElement).toBeInTheDocument();
    });

    it('renders with custom width', () => {
      renderWithProviders(<Logo width={100} />);
      const logoElement = screen.getByLabelText('Logo');
      expect(logoElement).toHaveStyle({ width: '100px' });
    });

    it('renders with custom height', () => {
      renderWithProviders(<Logo height={50} />);
      const logoElement = screen.getByLabelText('Logo');
      expect(logoElement).toHaveStyle({ height: '50px' });
    });

    it('renders with custom light color in light mode', () => {
      renderWithProviders(<Logo lightColor="#FF0000" />, { mode: 'light' });
      const logoElement = screen.getByLabelText('Logo');
      const paths = logoElement.querySelectorAll('path');
      paths.forEach(path => {
        expect(path).toHaveAttribute('fill', '#FF0000');
      });
    });

    it('renders with custom dark color in dark mode', () => {
      renderWithProviders(<Logo darkColor="#00FF00" />, { mode: 'dark' });
      const logoElement = screen.getByLabelText('Logo');
      const paths = logoElement.querySelectorAll('path');
      paths.forEach(path => {
        expect(path).toHaveAttribute('fill', '#00FF00');
      });
    });
  });

  describe('Responsive behavior', () => {
    it('calculates height when width is provided', () => {
      renderWithProviders(<Logo width={100} />);
      const logoElement = screen.getByLabelText('Logo');
      const heightValue = parseFloat(window.getComputedStyle(logoElement).height);
      // Aspect ratio is 2386/2384 ≈ 1.00084, so height should be close to 99.92
      expect(heightValue).toBeCloseTo(99.92, 0);
    });

    it('calculates width when height is provided', () => {
      renderWithProviders(<Logo height={100} />);
      const logoElement = screen.getByLabelText('Logo');
      const widthValue = parseFloat(window.getComputedStyle(logoElement).width);
      // Aspect ratio is 2386/2384 ≈ 1.00084, so width should be close to 100.08
      expect(widthValue).toBeCloseTo(100.08, 0);
    });
  });
}); 