import { divide } from "../src";

describe("divide", () => {
    test("divides two positive numbers", () => {
        expect(divide(6, 3)).toBe(2);
    });

    test("divides negative and positive numbers", () => {
        expect(divide(-6, 3)).toBe(-2);
    });

    test("divides two negative numbers", () => {
        expect(divide(-6, -3)).toBe(2);
    });

    test("returns fractional result when needed", () => {
        expect(divide(7, 2)).toBe(3.5);
    });

    test("throws on non-number inputs", () => {
        // @ts-expect-error testing runtime validation
        expect(() => divide("6", 3)).toThrow(TypeError);
        expect(() => divide(6, undefined as unknown as number)).toThrow(TypeError);
    });

    test("throws on division by zero", () => {
        expect(() => divide(1, 0)).toThrow(RangeError);
        expect(() => divide(-1, 0)).toThrow(RangeError);
    });
});
