export function arrayDiff(a: number[], b: number[]) {
	return a.filter((value) => b.indexOf(value) === -1);
}
