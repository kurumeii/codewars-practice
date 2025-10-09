export function validate(input: number) {
	function getDigitSum(num: number): number {
		const sum = [...String(num)].reduce((acc, digit) => acc + Number(digit), 0);
		return sum > 9 ? getDigitSum(sum) : sum;
	}
	function doubleEveryOtherDigit(digits: string[]): number[] {
		return digits
			.reverse()
			.map((digit, index) =>
				index % 2 === 1 ? Number(digit) * 2 : Number(digit)
			)
			.reverse();
	}
	const processedDigits = doubleEveryOtherDigit([...String(input)]);
	const summedDigits = processedDigits.map((num) =>
		num > 9 ? getDigitSum(num) : num
	);
	const total = summedDigits.reduce((acc, num) => acc + num, 0);
	return total % 10 === 0;
}
