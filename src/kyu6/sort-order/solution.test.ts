import { sortArray } from "./solution";

describe("Sample Tests", () => {
	it("should pass some sample tests", () => {
		expect(sortArray([5, 3, 2, 8, 1, 4])).toEqual([1, 3, 2, 8, 5, 4]);
		expect(sortArray([5, 3, 1, 8, 0])).toEqual([1, 3, 5, 8, 0]);
	});

	it("should work for a random array", () => {
		const randomArray = Array.from({ length: 20 }, () =>
			Math.floor(Math.random() * 50 + 1),
		);
		const sortedOdd = randomArray
			.filter((n) => n % 2 !== 0)
			.sort((a, b) => a - b);
		const expectedArray = randomArray.map((n) => {
			if (n % 2 !== 0) {
				return sortedOdd.shift();
			}
			return n;
		});
		expect(sortArray([...randomArray])).toEqual(expectedArray);
	});
});
