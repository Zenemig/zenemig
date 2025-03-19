import { renderWithProviders, screen } from '@/test-utils';
import Header from './index';

describe('<Header />', () => {
  describe('Setup', () => {
    it('renders with default title', () => {
      renderWithProviders(<Header />);
      
      expect(screen.getByText('Zenemig')).toBeInTheDocument();
    });

    it('renders with custom title', () => {
      renderWithProviders(<Header title="Custom Title" />);
      
      expect(screen.getByText('Custom Title')).toBeInTheDocument();
    });

    it('renders with logo and actions', () => {
      const logo = <div data-testid="logo">Logo</div>;
      const actions = <div data-testid="actions">Actions</div>;
      
      renderWithProviders(<Header logo={logo} actions={actions} />);
      
      expect(screen.getByTestId('logo')).toBeInTheDocument();
      expect(screen.getByTestId('actions')).toBeInTheDocument();
    });
  });
}); 