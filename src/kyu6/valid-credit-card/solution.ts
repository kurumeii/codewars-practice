const task = {
	sumOfOwnDigits: (input: number) => {
		let sum = Array.from(input.toString()).reduce(
			(prev, cur) => prev + parseInt(cur),
			0
		);
		if (sum > 9) {
			sum = task.sumOfOwnDigits(sum);
		}
		return sum;
	},
	first: (input: string[]) =>
		input
			.reverse()
			.map((v, i) => (i % 2 === 1 ? parseInt(v) * 2 : parseInt(v)))
			.reverse(),
	second: (input: number[]) =>
		input.map((v) => (v > 9 ? task.sumOfOwnDigits(v) : v)),
	handle: (input: string[]) =>
		task.second(task.first(input)).reduce((prev, curr) => prev + curr, 0) %
			10 ===
		0,
};

export function validate(input: number) {
	return task.handle(Array.from(input.toString()));
}
