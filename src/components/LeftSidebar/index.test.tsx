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
      expect(screen.getByRole('heading', { name: 'Sr. Front-End Engineer' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Varsity Tutors' })).toHaveAttribute('href', 'https://www.varsitytutors.com');
      
      // Verify social links
      expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/zenemig');
      expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://linkedin.com/in/zenemig');
      expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute('href', 'https://instagram.com/zenemig.photography');
      expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute('href', 'mailto:hola@zenemig.net');
    });

    it('renders with custom props', () => {
      const customProps = {
        title: 'Software Engineer',
        status: 'Currently Employed',
        statusLink: 'https://example.com',
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
      expect(screen.getByRole('link', { name: customProps.status })).toHaveAttribute('href', customProps.statusLink);
      
      // Verify custom social links
      expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', customProps.socialLinks.github);
      expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', customProps.socialLinks.linkedin);
      expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute('href', customProps.socialLinks.instagram);
      expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute('href', `mailto:${customProps.email}`);
    });
  });

  describe('Edge Cases', () => {
    it('renders without social links', () => {
      renderWithProviders(<LeftSidebar socialLinks={{}} email="" />);
      
      // Verify social links are not rendered
      expect(screen.queryByRole('link', { name: 'GitHub' })).not.toBeInTheDocument();
      expect(screen.queryByRole('link', { name: 'LinkedIn' })).not.toBeInTheDocument();
      expect(screen.queryByRole('link', { name: 'Instagram' })).not.toBeInTheDocument();
      expect(screen.queryByRole('link', { name: 'Email' })).not.toBeInTheDocument();
    });

    it('renders with partial social links', () => {
      renderWithProviders(<LeftSidebar socialLinks={{ github: 'https://github.com/test' }} />);
      
      // Verify only GitHub link is rendered
      expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
      expect(screen.queryByRole('link', { name: 'LinkedIn' })).not.toBeInTheDocument();
      expect(screen.queryByRole('link', { name: 'Instagram' })).not.toBeInTheDocument();
    });
  });
}); 