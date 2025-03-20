import { renderWithProviders, screen } from '@/test-utils';
import DisplayText from './index';
import { displayTextFixtures } from '@/fixtures/display-text-component';

describe('<DisplayText />', () => {
  describe('Setup', () => {
    it('renders with children content', () => {
      renderWithProviders(<DisplayText>Display Content</DisplayText>);
      expect(screen.getByText('Display Content')).toBeInTheDocument();
    });

    it('applies primary color prop correctly', () => {
      renderWithProviders(
        <DisplayText 
          {...displayTextFixtures.primary}
          data-testid="display-text"
        >
          Custom Display
        </DisplayText>
      );
      
      const element = screen.getByTestId('display-text');
      expect(element).toHaveTextContent('Custom Display');
      expect(element).toHaveClass('MuiTypography-root');
    });

    it('applies centered alignment correctly', () => {
      renderWithProviders(
        <DisplayText 
          {...displayTextFixtures.centered}
          data-testid="display-text"
        >
          Centered Text
        </DisplayText>
      );
      
      const element = screen.getByTestId('display-text');
      expect(element).toHaveTextContent('Centered Text');
      expect(element).toHaveClass('MuiTypography-alignCenter');
    });
  });
}); 