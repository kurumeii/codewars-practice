export function findEvenIndex(arr: number[]): number {
	for (let i = 0; i < arr.length; i++) {
		const leftSide = arr.slice(0, i);
		const rightSide = arr.slice(i + 1);

		const leftSum = leftSide.reduce((sum, val) => sum + val, 0);
		const rightSum = rightSide.reduce((sum, val) => sum + val, 0);

		if (leftSum === rightSum) {
			return i;
		}
	}

	return -1;
}
