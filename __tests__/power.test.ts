import {power} from "../src";

describe("power", () => {
    test("calculates power of two positive numbers", () => {
        expect(power(2, 3)).toBe(8);
    });

    test("calculates power with zero exponent", () => {
        expect(power(5, 0)).toBe(1);
    });

    test("calculates power with negative exponent", () => {
        expect(power(2, -1)).toBe(0.5);
    });

    test("calculates power with negative base", () => {
        expect(power(-2, 3)).toBe(-8);
        expect(power(-2, 2)).toBe(4);
    });

    test("calculates power with fractional exponent", () => {
        expect(power(4, 0.5)).toBe(2);
    });

    test("calculates power of zero", () => {
        expect(power(0, 5)).toBe(0);
        expect(power(0, 0)).toBe(1);
    });

    test("throws on non-number inputs", () => {
        // @ts-expect-error testing runtime validation
        expect(() => power("2", 3)).toThrow(TypeError);
        // @ts-expect-error testing runtime validation
        expect(() => power(2, "3")).toThrow(TypeError);
    });
});
