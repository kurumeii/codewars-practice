import { sortArray } from "./solution";

describe("Sample Tests", () => {
  it.each([
    { input: [5, 3, 2, 8, 1, 4], expected: [1, 3, 2, 8, 5, 4] },
    { input: [5, 3, 1, 8, 0], expected: [1, 3, 5, 8, 0] },
    { input: [], expected: [] },
    { input: [2, 4, 6, 8, 0], expected: [2, 4, 6, 8, 0] },
    { input: [9, 7, 5, 3, 1], expected: [1, 3, 5, 7, 9] },
    { input: [5, 3, 11, 8, 1, 4], expected: [1, 3, 5, 8, 11, 4] },
    { input: [7, 1], expected: [1, 7] },
    { input: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], expected: [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] }
  ])('should return $expected for $input', ({ input, expected }) => {
    expect(sortArray(input)).toEqual(expected);
  });
});
