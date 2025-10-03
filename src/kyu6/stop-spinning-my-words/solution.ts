export function spinWords(words: string): string {
	return words
		.split(" ")
		.map((w) => {
			if (w.length >= 5) {
				return w.split("").reverse().join("");
			}
			return w;
		})
		.join(" ");
}
