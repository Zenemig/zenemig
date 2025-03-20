// Set up matchMedia mock before importing modules
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Import after setting up mocks
import { themeAtom, getInitialTheme } from './theme';
import { getDefaultStore } from 'jotai';

describe('theme', () => {
  let store: ReturnType<typeof getDefaultStore>;
  
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    
    // Reset matchMedia to default (light theme)
    (window.matchMedia as jest.Mock).mockImplementation(query => ({
      matches: false,
      media: query,
    }));
  });

  describe('getInitialTheme', () => {
    it('returns light theme when no preference is set', () => {
      expect(getInitialTheme()).toBe('light');
    });

    it('returns dark theme when system prefers dark mode', () => {
      // Mock dark mode preference
      (window.matchMedia as jest.Mock).mockImplementation(query => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
      }));

      expect(getInitialTheme()).toBe('dark');
    });

    it('returns theme from localStorage when available', () => {
      localStorage.setItem('theme', JSON.stringify('dark'));
      expect(getInitialTheme()).toBe('dark');
    });

    it('handles invalid localStorage value', () => {
      localStorage.setItem('theme', 'invalid');
      expect(getInitialTheme()).toBe('light'); // Falls back to system preference
    });
  });

  describe('themeAtom', () => {
    beforeEach(() => {
      // Create a fresh store for each test
      store = getDefaultStore();
    });

    it('initializes with light theme by default', () => {
      const theme = store.get(themeAtom);
      expect(theme).toBe('light');
    });

    it('persists theme changes to localStorage', () => {
      store.set(themeAtom, 'dark');
      
      expect(localStorage.setItem).toHaveBeenCalledWith('theme', JSON.stringify('dark'));
      expect(store.get(themeAtom)).toBe('dark');
    });

    it('handles theme toggle', () => {
      store.set(themeAtom, 'light');
      expect(store.get(themeAtom)).toBe('light');
      expect(localStorage.setItem).toHaveBeenCalledWith('theme', JSON.stringify('light'));

      store.set(themeAtom, 'dark');
      expect(store.get(themeAtom)).toBe('dark');
      expect(localStorage.setItem).toHaveBeenCalledWith('theme', JSON.stringify('dark'));
    });
  });
}); 