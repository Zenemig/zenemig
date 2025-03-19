# Playwright End-to-End Tests

This directory contains Playwright end-to-end tests for the application.

## Structure

- Tests are organized by feature or page
- Use the `.test.ts` extension for all test files
- Follow the naming convention: `featureName.test.ts` or `pageName.test.ts`

## Running Tests

```bash
# Run all E2E tests
npm run e2e

# Run E2E tests with UI
npm run e2e:ui
```

## Important Notes

1. Playwright tests must be run with `npx playwright test` or through the npm scripts
2. Do not use Jest for running Playwright tests - they require different runners
3. Keep Playwright tests in the `e2e` directory, separate from Jest unit tests

## Best Practices

1. Use page objects when appropriate for complex pages
2. Use descriptive test names
3. Group related tests with `test.describe`
4. Set up proper isolation between tests

See the Playwright documentation for more details: https://playwright.dev/docs/intro
