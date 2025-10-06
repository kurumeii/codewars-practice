export function duplicateEncoder(word: string): string {
	const lowerCaseWord = word.toLowerCase();
	return word
		.split("")
		.map((char) => {
			const lowerCaseChar = char.toLowerCase();
			return lowerCaseWord.indexOf(lowerCaseChar) !==
				lowerCaseWord.lastIndexOf(lowerCaseChar)
				? ")"
				: "(";
		})
		.join("");
}
