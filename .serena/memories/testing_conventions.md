# Testing Conventions and Patterns

## Test File Structure

All test files follow a consistent pattern based on the existing codebase:

### Standard Template
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

### Test Case Categories to Include

1. **Basic/Happy Path Cases**: Standard expected inputs and outputs
2. **Edge Cases**: Empty arrays, single elements, boundary values
3. **Special Scenarios**: Problem-specific edge cases
4. **Error Conditions**: Invalid inputs (when applicable)

### Naming Conventions

- **Test Suite**: "Basic test for [problem name]" (lowercase problem description)
- **Test Cases**: Include descriptive notes for edge cases and special scenarios
- **Variables**: Use clear, descriptive names in test data

### Examples of Good Test Case Notes

- "empty array"
- "single element" 
- "no balance point"
- "with negative numbers"
- "should ignore case"
- "boundary condition"

### Test Data Organization

- Use the `testCases` array approach for consistency
- Include a variety of inputs that test different code paths
- Order test cases from simple to complex
- Group related scenarios together in the array