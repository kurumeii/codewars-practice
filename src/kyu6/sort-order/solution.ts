export function sortArray(array: number[]) {
	const odd = array.filter((value) => value % 2).sort();
	return array.map((x) => (x % 2 ? odd.shift() : x));
}
