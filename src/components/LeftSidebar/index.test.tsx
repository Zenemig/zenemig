import { renderWithProviders, screen } from '@/test-utils';
import { LeftSidebar } from './index';

// Mock the Logo and ThemeToggle components
jest.mock('@/components/Logo', () => ({
  __esModule: true,
  default: () => <div data-testid="mock-logo">Logo</div>
}));

jest.mock('@/components/ThemeToggle', () => ({
  __esModule: true,
  default: () => <div data-testid="mock-theme-toggle">Theme Toggle</div>
}));

describe('<LeftSidebar />', () => {
  describe('Setup', () => {
    it('renders with default props', () => {
      renderWithProviders(<LeftSidebar />);
      
      // Verify title and status
      expect(screen.getByRole('heading', { name: 'Front-End Developer' })).toBeInTheDocument();
      expect(screen.getByText('Available for Hire')).toBeInTheDocument();
      
      // Verify contact information
      expect(screen.getByText('+56 9 8500 6191')).toBeInTheDocument();
      expect(screen.getByText('hola@zenemig.net')).toBeInTheDocument();
      
      // Verify social links
      expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', 'https://github.com/zenemig');
      expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', 'https://linkedin.com/in/zenemig');
      expect(screen.getByRole('link', { name: /instagram/i })).toHaveAttribute('href', 'https://instagram.com/zenemig');
    });

    it('renders with custom props', () => {
      const customProps = {
        title: 'Software Engineer',
        status: 'Currently Employed',
        phoneNumber: '+1 234 567 8900',
        email: 'test@example.com',
        socialLinks: {
          github: 'https://github.com/test',
          linkedin: 'https://linkedin.com/in/test',
          instagram: 'https://instagram.com/test'
        }
      };

      renderWithProviders(<LeftSidebar {...customProps} />);
      
      // Verify custom title and status
      expect(screen.getByRole('heading', { name: customProps.title })).toBeInTheDocument();
      expect(screen.getByText(customProps.status)).toBeInTheDocument();
      
      // Verify custom contact information
      expect(screen.getByText(customProps.phoneNumber)).toBeInTheDocument();
      expect(screen.getByText(customProps.email)).toBeInTheDocument();
      
      // Verify custom social links
      expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', customProps.socialLinks.github);
      expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', customProps.socialLinks.linkedin);
      expect(screen.getByRole('link', { name: /instagram/i })).toHaveAttribute('href', customProps.socialLinks.instagram);
    });
  });

  describe('Edge Cases', () => {
    it('renders without social links', () => {
      renderWithProviders(<LeftSidebar socialLinks={{}} />);
      
      // Verify social links are not rendered
      expect(screen.queryByRole('link', { name: /github/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('link', { name: /linkedin/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('link', { name: /instagram/i })).not.toBeInTheDocument();
    });

    it('renders without contact information', () => {
      renderWithProviders(<LeftSidebar phoneNumber="" email="" />);
      
      // Verify contact information is not rendered
      expect(screen.queryByText(/\+\d+/)).not.toBeInTheDocument();
      expect(screen.queryByText(/@/)).not.toBeInTheDocument();
    });
  });
}); 