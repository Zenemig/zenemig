// Mock matchMedia
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

// Mock localStorage with proper JSON serialization
const storedItems: Record<string, string> = {};

const localStorageMock = {
  getItem: jest.fn((key: string) => storedItems[key] || null),
  setItem: jest.fn((key: string, value: string) => {
    storedItems[key] = value;
  }),
  clear: jest.fn(() => {
    Object.keys(storedItems).forEach(key => delete storedItems[key]);
  }),
  removeItem: jest.fn((key: string) => {
    delete storedItems[key];
  }),
  length: 0,
  key: jest.fn((index: number) => Object.keys(storedItems)[index] || null),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Reset mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
  localStorageMock.clear();
  
  // Reset matchMedia mock to default (light theme)
  (window.matchMedia as jest.Mock).mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
}); 