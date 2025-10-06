# Gemini Project Context: CodeWars Practice

## Project Overview

This is a TypeScript-based monorepo for practicing and solving coding challenges, likely from platforms like CodeWars. The project is structured to keep each coding challenge isolated in its own directory, complete with its own solution and test files.

- **Technologies**:
  - **Language**: TypeScript
  - **Package Manager**: pnpm
  - **Testing**: Jest
  - **Linting & Formatting**: Biome

- **Architecture**:
  - The `src` directory contains all the coding challenges.
  - Challenges are organized by difficulty level (e.g., `kyu6`).
  - Each challenge has its own folder (e.g., `array-diff`), which contains:
    - `solution.ts`: The implementation of the solution.
    - `solution.test.ts`: Jest tests for the solution.

## Building and Running

### Installation

To install all the necessary dependencies, run:

```bash
pnpm install
```

### Testing

The primary way to verify solutions is by running tests. To run all tests for all challenges, use:

```bash
pnpm test
```

To run tests for a specific challenge, you can use Jest's filtering capabilities:

```bash
pnpm test -- <path/to/challenge.test.ts>
```

### Linting and Formatting

The project uses Biome to maintain a consistent code style.

- To check for linting errors:
  ```bash
  pnpm lint
  ```
- To automatically fix linting and formatting issues:
  ```bash
  pnpm lint:fix
  pnpm clean
  ```

## Development Conventions

- **File Structure**: Each new coding challenge should be created in its own directory under `src/kyu<level>/<challenge-name>/`.
- **Solution File**: The solution should be implemented in a `solution.ts` file and export the necessary functions.
- **Test File**: Tests should be written in a `solution.test.ts` file using Jest. The tests should import the solution and validate its correctness with various test cases.
- **Code Style**: Code style is enforced by Biome. It's recommended to run the formatting and linting commands before committing changes.

### Test Structure Pattern

Tests follow a consistent pattern using a `testCases` array approach:

```typescript
import { describe, expect, it } from "@jest/globals";
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