# Code Style and Conventions

*   Source code is located in the `src` directory.
*   Tests are located alongside the source files in the `src` directory, with a `.test.ts` suffix.
*   Code should be formatted and linted with Biome before committing.
*   **Indent Style**: Tabs
*   **Quote Style**: Double quotes
*   **Trailing Commas**: es5
*   **TypeScript**: Strict mode is enabled.

## Test File Conventions

*   Test suite names follow the pattern: "Basic test for [problem name]"
*   Use a `testCases` array approach for consistent test structure
*   Each test case object should have: `input`, `output`, and optional `note`
*   Use `forEach` to generate individual test cases dynamically
*   Test descriptions should be descriptive and include expected values
*   Format: `should return ${output} for ${input}${note ? ` (${note})` : ""}`
*   Include edge cases like empty arrays, single elements, and boundary conditions
*   Group related test scenarios but avoid overly nested describe blocks
