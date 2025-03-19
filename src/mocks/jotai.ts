/**
 * Mocks for Jotai state management library
 * Only mocks what's needed to test our components, not Jotai itself
 */

// Create mock functions outside the mock setup for reuse
const useAtomMock = jest.fn();
const atomMock = jest.fn((initialValue) => ({ 
  init: initialValue,
  debugLabel: `atom-${Math.random()}`
}));

/**
 * Set up mocks for Jotai atoms
 * Must be called before tests run
 */
export const mockJotaiAtoms = () => {
  // Reset mocks between tests
  jest.clearAllMocks();
  useAtomMock.mockReset();
  atomMock.mockClear();
  
  // Mock only the parts of jotai we use in our components
  jest.mock('jotai', () => ({
    useAtom: useAtomMock,
    atom: atomMock
  }));
  
  // Mock the specific atom we use in our app
  jest.mock('@/atoms/theme', () => ({
    __esModule: true,
    themeAtom: {
      init: 'light',
      debugLabel: 'themeAtom'
    }
  }));
  
  return { useAtomMock, atomMock };
};

/**
 * Setup a mock theme atom for testing
 * @param initialMode - The initial theme mode to use
 * @returns The mock setter function for assertions
 */
export const setupMockThemeAtom = (initialMode = 'light') => {
  const mockSetMode = jest.fn().mockImplementation((value) => {
    if (typeof value === 'function') {
      const newValue = value(initialMode);
      return newValue;
    }
    return value;
  });
  useAtomMock.mockReturnValue([initialMode, mockSetMode]);
  return { mockSetMode };
};

/**
 * Utility to set atom values for testing
 * @param value - The value to set
 * @param setter - The setter function (usually a mock)
 */
export const setAtomValue = <T>(value: T, setter = jest.fn()): jest.Mock => {
  useAtomMock.mockReturnValue([value, setter]);
  return setter;
}; 