import {add} from "../src";

describe("add", () => {
    test("adds two positive numbers", () => {
        expect(add(2, 3)).toBe(5);
    });

    test("adds negative and positive numbers", () => {
        expect(add(-2, 3)).toBe(1);
    });

    test("adds two negative numbers", () => {
        expect(add(-2, -3)).toBe(-5);
    });

    test("throws on non-number inputs", () => {
        // @ts-expect-error testing runtime validation
        expect(() => add("2", 3)).toThrow(TypeError);
        expect(() => add(2, null as unknown as number)).toThrow(TypeError);
    });
});
