import { render, screen, setupUserEvent } from '@/test-utils';
import Home from './page';

describe('<Home />', () => {
  describe('Setup', () => {
    it('renders welcome message', () => {
      render(<Home />);
      expect(screen.getByText('Welcome to Zenemig')).toBeInTheDocument();
    });

    it('renders theme toggle button', () => {
      render(<Home />);
      expect(screen.getByText(/Toggle (Light|Dark) Mode/)).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('toggles theme when button is clicked', async () => {
      const user = setupUserEvent();
      render(<Home />);
      
      const button = screen.getByText(/Toggle (Light|Dark) Mode/);
      const initialText = button.textContent;
      
      await user.click(button);
      
      expect(button.textContent).not.toBe(initialText);
    });
  });
}); 