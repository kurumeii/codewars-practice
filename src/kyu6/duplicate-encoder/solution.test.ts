import { duplicateEncoder } from "./solution";

describe("Basic test for duplicate encoder", () => {
	const testCases = [
		{ input: "din", output: "(((" },
		{ input: "recede", output: "()()()" },
		{ input: "Success", output: ")())())", note: "should ignore case" },
		{ input: "(( &", output: "))((" },
	];

	testCases.forEach(({ input, output, note }) => {
		const title = `should return ${output} for ${input}${note ? ` (${note})` : ""}`;
		it(title, () => {
			expect(duplicateEncoder(input)).toBe(output);
		});
	});
});

