import { describe, it, expect } from "@jest/globals";
import { digitalRoot } from "./solution";

describe("Test for digital root", () => {
	it.each([
		{ input: 16, expected: 7 },
		{ input: 0, expected: 0 },
		{ input: 10, expected: 1 },
		{ input: 942, expected: 6 },
		{ input: 132189, expected: 6 },
		{ input: 493193, expected: 2 },
		{ input: 456, expected: 6 },
		{ input: 123456789, expected: 9 },
		{ input: 999999999999, expected: 9 },
		{ input: 12081998, expected: 2 },
	])("Should return $expected for input: $input", ({ input, expected }) => {
		expect(digitalRoot(input)).toStrictEqual(expected);
	});
});
