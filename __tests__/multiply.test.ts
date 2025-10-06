import { multiply } from "../src";

describe("multiply", () => {
    test("multiplies two positive numbers", () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test("multiplies negative and positive numbers", () => {
        expect(multiply(-2, 3)).toBe(-6);
    });

    test("multiplies two negative numbers", () => {
        expect(multiply(-2, -3)).toBe(6);
    });

    test("throws on non-number inputs", () => {
        // @ts-expect-error testing runtime validation
        expect(() => multiply("2", 3)).toThrow(TypeError);
        expect(() => multiply(2, null as unknown as number)).toThrow(TypeError);
    });
});
