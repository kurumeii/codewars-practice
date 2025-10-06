- Source code is located in the `src` directory.
- Tests are located alongside the source files in the `src` directory, with a `.test.ts` suffix.
- Code should be formatted and linted with Biome before committing.
- The project uses `pnpm` as a package manager.
- The project uses TypeScript.
- The project uses Jest for testing.
- The project uses Biome for linting and formatting.

## Test Structure Pattern
- Use descriptive test suite names like "Basic test for [problem name]"
- Use a `testCases` array with objects containing `input`, `output`, and optional `note` properties
- Use `forEach` to iterate through test cases and generate individual test descriptions
- Test titles should include the expected output and input values, with optional notes in parentheses
- Example pattern:
  ```typescript
  describe("Basic test for [problem name]", () => {
    const testCases = [
      { input: [1, 2, 3], output: 6, note: "simple case" },
      { input: [], output: 0, note: "empty array" },
    ];

    testCases.forEach(({ input, output, note }) => {
      const title = `should return ${output} for ${input}${note ? ` (${note})` : ""}`;
      it(title, () => {
        expect(functionName(input)).toBe(output);
      });
    });
  });
  ```