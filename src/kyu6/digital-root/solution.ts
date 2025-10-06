export function digitalRoot(n: number): number {
	const toNum = (input: string) => Number(input);
	const sumOf = (prev: number, curr: string) => {
		const sum = prev + toNum(curr);
		if (sum < 10) {
			return sum;
		}
		return digitalRoot(sum);
	};
	return n.toString().split("").reduce(sumOf, 0);
}
