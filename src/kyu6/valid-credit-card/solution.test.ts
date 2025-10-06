import { describe, it, expect } from "@jest/globals";
import { validate } from "./solution";

describe("Basic test", () => {
	it("Should pass basic test", () => {
		expect(validate(123)).toBeFalsy();
		expect(validate(1)).toBeFalsy();
		expect(validate(2121)).toBeTruthy();
		expect(validate(1230)).toBeTruthy();
	});
});

describe("Complex use cases", () => {
	it("should return true for a valid long credit card number", () => {
		expect(validate(79927398713)).toBeTruthy();
		expect(validate(1234567890123456)).toBeFalsy();
		expect(validate(6011797403852700)).toBeFalsy();
	});
});
