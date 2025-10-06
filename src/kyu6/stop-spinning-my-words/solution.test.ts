import { describe, it, expect } from "@jest/globals";
import { spinWords } from "./solution";

describe("Spining words", () => {
	it.each([
		{ input: "Hey fellow warriors", expected: "Hey wollef sroirraw" },
		{ input: "This is a test", expected: "This is a test" },
		{ input: "This is another test", expected: "This is rehtona test" },
	])('should return "$expected" for input "$input"', ({ input, expected }) => {
		expect(spinWords(input)).toBe(expected);
	});
});
