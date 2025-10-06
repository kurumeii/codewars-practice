# GEMINI.md

## Project Overview

This is a simple TypeScript project set up for practicing Codewars katas. It includes:

*   **TypeScript**: For writing typed JavaScript code.
*   **Jest**: For running tests.
*   **Biome**: For linting and formatting the code.

## Building and Running

*   **Install dependencies**: `pnpm install`
*   **Run tests**: `pnpm test`
*   **Lint code**: `pnpm lint`
*   **Lint and fix code**: `pnpm lint:fix`

## Development Conventions

*   Source code is located in the `src` directory.
*   Tests are located alongside the source files in the `src` directory, with a `.test.ts` suffix.
*   Code should be formatted and linted with Biome before committing.

### Test Structure Pattern

Tests follow a consistent pattern using a `testCases` array approach:

```typescript
import { functionName } from "./solution";

describe("Basic test for [problem name]", () => {
  const testCases = [
    { input: inputValue, output: expectedOutput, note: "description" },
    { input: inputValue, output: expectedOutput }, // note is optional
  ];

  testCases.forEach(({ input, output, note }) => {
    const title = `should return ${output} for ${input}${note ? ` (${note})` : ""}`;
    it(title, () => {
      expect(functionName(input)).toBe(output);
    });
  });
});
```

**Key conventions:**
- Test suite names: "Basic test for [problem name]"
- Use `testCases` array with `input`, `output`, and optional `note` properties
- Generate test descriptions dynamically using `forEach`
- Include edge cases like empty arrays, single elements, and boundary conditions