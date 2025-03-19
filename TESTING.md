# Testing Strategy

This document outlines the testing strategy for this project, including how to structure, write, and run different types of tests.

## Test Types and Directory Structure

This project uses two separate testing frameworks for different test types:

1. **Unit/Component Tests (Jest)** - Located in `src/__tests__/`
2. **End-to-End Tests (Playwright)** - Located in `e2e/`

### Important: Framework Separation

Playwright and Jest use different test runners and cannot be mixed. Always run:

- Jest tests with the Jest runner (`npm test` or `npm run test:unit`)
- Playwright tests with the Playwright runner (`npm run test:e2e`)

## Unit/Component Testing with Jest

Jest tests are used for unit testing functions and component testing.

### Directory Structure

```
src/
├── __tests__/              # Jest test directory
│   ├── components/         # Component tests
│   ├── hooks/              # Hook tests
│   ├── utils/              # Utility function tests
│   └── README.md           # Jest testing guidelines
├── test-utils/             # Test utilities for Jest
│   └── index.tsx           # Centralized test utilities
└── fixtures/               # Test fixtures
    └── component-name/     # Component-specific fixtures
```

### Running Jest Tests

```bash
# Run all unit tests
npm test
# or
npm run test:unit

# Run tests in watch mode
npm run test:unit:watch

# Run tests with coverage
npm run test:unit:coverage
```

### Jest Test Example

```typescript
import { renderWithProviders, screen } from '@/test-utils';
import MyComponent from '../path/to/component';

describe('<MyComponent />', () => {
  describe('Setup', () => {
    it('renders with default props', () => {
      renderWithProviders(<MyComponent />);
      expect(screen.getByText('Expected Text')).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('responds to user interaction', async () => {
      const user = setupUserEvent();
      renderWithProviders(<MyComponent />);
      await user.click(screen.getByRole('button'));
      expect(screen.getByText('Updated Text')).toBeInTheDocument();
    });
  });
});
```

## End-to-End Testing with Playwright

Playwright tests perform end-to-end testing of the entire application.

### Directory Structure

```
e2e/
├── utils/                  # Playwright test utilities
│   └── test-utils.ts       # Common helpers for E2E tests
├── fixtures/               # Test fixtures for Playwright
├── pages/                  # Page object models (optional)
│   └── login-page.ts       # Example page object
├── feature1.test.ts        # Tests for feature 1
├── feature2.test.ts        # Tests for feature 2
└── README.md               # Playwright testing guidelines
```

### Running Playwright Tests

```bash
# Run all E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui
```

### Playwright Test Example

```typescript
import { test, expect } from '@playwright/test';
import { login } from './utils/test-utils';

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await login(page, 'testuser', 'password');
  });

  test('displays user information', async ({ page }) => {
    await expect(page.getByText('Welcome, Test User')).toBeVisible();
  });

  test('shows correct menu items', async ({ page }) => {
    await expect(page.getByRole('navigation')).toContainText('Dashboard');
    await expect(page.getByRole('navigation')).toContainText('Settings');
  });
});
```

## CI/CD Integration

Both Jest and Playwright tests are run in the CI/CD pipeline:

```yaml
# Example CI config
test:unit:
  script:
    - npm run test:unit

test:e2e:
  script:
    - npm run test:e2e
```

## Best Practices

1. **Test Independence**: Tests should be independent and not rely on the state created by other tests.
2. **Fixtures Over Constants**: Use fixtures for test data to keep tests maintainable.
3. **Select the Right Framework**:
   - Use Jest for unit and component testing
   - Use Playwright for end-to-end testing
4. **Avoid Mixing Test Runners**: Never try to run Playwright tests with Jest or vice versa.
5. **Follow Naming Conventions**:
   - Jest: `ComponentName.test.tsx` or `functionName.test.ts`
   - Playwright: `featureName.test.ts` or `pageName.test.ts`
