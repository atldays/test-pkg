import { sqrt } from "../src";

describe("sqrt", () => {
    test("computes square root of a perfect square", () => {
        expect(sqrt(9)).toBe(3);
    });

    test("computes square root of zero", () => {
        expect(sqrt(0)).toBe(0);
    });

    test("computes square root of a non-perfect square", () => {
        expect(sqrt(2)).toBeCloseTo(Math.SQRT2, 10);
    });

    test("throws on negative input", () => {
        expect(() => sqrt(-1)).toThrow(RangeError);
    });

    test("throws on non-number input", () => {
        // @ts-expect-error testing runtime validation
        expect(() => sqrt("9")).toThrow(TypeError);
    });
});
