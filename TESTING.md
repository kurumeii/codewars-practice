# Testing Setup

This project uses Jest with TypeScript for testing, following the latest Jest best practices.

## Configuration

- **Jest Version**: 30.2.0 (latest)
- **TypeScript Support**: ts-jest with ESM modules
- **Test Environment**: Node.js
- **Configuration File**: `jest.config.ts`

## Dependencies

- `jest@30.2.0` - Main testing framework
- `ts-jest@29.4.4` - TypeScript preprocessor
- `@jest/globals@30.2.0` - Official Jest globals for explicit imports
- `@types/jest@30.0.0` - TypeScript type definitions

## Writing Tests

Following the latest Jest documentation, all test files use explicit imports:

```typescript
import { describe, it, expect } from '@jest/globals';
import { myFunction } from './solution';

describe('My Function', () => {
  it('should work correctly', () => {
    expect(myFunction(input)).toBe(expectedOutput);
  });
});
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Key Features

1. **Explicit Imports**: All Jest APIs (`describe`, `it`, `expect`) are explicitly imported from `@jest/globals`
2. **TypeScript Support**: Full TypeScript support with type checking
3. **ESM Modules**: Modern ES module support
4. **Coverage Collection**: Configured to collect coverage from source files
5. **Test File Discovery**: Automatically finds `*.test.ts` files in the `src` directory

## Best Practices

- Use `describe` blocks to group related tests
- Use descriptive test names that explain what is being tested
- Use `it.each` for parameterized tests with multiple inputs
- Import Jest globals explicitly for better TypeScript support
- Keep test files next to the code they test