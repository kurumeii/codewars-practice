import { sortArray } from "./solution";

describe("Sample Tests", () => {
	it("should pass some sample tests", () => {
		expect(sortArray([5, 3, 2, 8, 1, 4])).toEqual([1, 3, 2, 8, 5, 4]);
		expect(sortArray([5, 3, 1, 8, 0])).toEqual([1, 3, 5, 8, 0]);
		expect(sortArray([2, 4, 6, 8, 0])).toEqual([2, 4, 6, 8, 0]);
		expect(sortArray([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9]);
	});
});
