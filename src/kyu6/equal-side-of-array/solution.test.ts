import { describe, it, expect } from "@jest/globals";
import { findEvenIndex } from "./solution";

describe("Basic test for equal sides of array", () => {
	const testCases = [
		{ input: [1, 2, 3, 4, 3, 2, 1], output: 3 },
		{ input: [1, 100, 50, -51, 1, 1], output: 1 },
		{ input: [1, 2, 3, 4, 5, 6], output: -1 },
		{ input: [20, 10, 30, 10, 10, 15, 35], output: 3 },
		{ input: [], output: -1, note: "empty array" },
		{ input: [0], output: 0, note: "single element" },
		{ input: [1], output: 0, note: "single element" },
		{ input: [1, 2], output: -1, note: "two elements" },
		{ input: [0, 0, 0, 0, 0], output: 0, note: "all zeros" },
		{ input: [1, 0, 1], output: 1 },
		{ input: [-1, -2, -3, -4, -3, -2, -1], output: 3 },
		{ input: [5, 0, -5], output: -1 },
	];

	testCases.forEach(({ input, output, note }) => {
		const title = `should return ${output} for [${input.join(",")}]${note ? ` (${note})` : ""}`;
		it(title, () => {
			expect(findEvenIndex(input)).toBe(output);
		});
	});
});
