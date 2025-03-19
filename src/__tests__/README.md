# Jest Unit Tests

This directory contains Jest unit tests for the application.

## Structure

- Tests are organized according to the component/module they test
- Use the `.test.ts` or `.test.tsx` extension for all test files
- Follow the naming convention: `ComponentName.test.tsx` or `functionName.test.ts`

## Running Tests

```bash
# Run all Jest tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Best Practices

1. Group tests using `describe` blocks
2. Use the following structure:

   - `describe('ComponentName')` - top level component name
   - `describe('Setup')` - rendering and initialization tests
   - `describe('Interaction')` - user interaction tests
   - `describe('Edge Cases')` - tests for edge cases

3. Always use explicit assertions
4. Keep tests isolated and independent

See the testing-framework.mdc file for complete testing standards.
