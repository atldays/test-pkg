import { subtract } from "../src";

describe("subtract", () => {
  test("subtracts two positive numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("subtracts negative and positive numbers", () => {
    expect(subtract(-2, 3)).toBe(-5);
    expect(subtract(2, -3)).toBe(5);
  });

  test("subtracts two negative numbers", () => {
    expect(subtract(-2, -3)).toBe(1);
  });

  test("handles zero correctly", () => {
    expect(subtract(0, 0)).toBe(0);
    expect(subtract(0, 5)).toBe(-5);
    expect(subtract(5, 0)).toBe(5);
  });

  test("works with decimal numbers", () => {
    expect(subtract(0.3, 0.1)).toBeCloseTo(0.2, 10);
  });

  test("throws on non-number inputs", () => {
    // @ts-expect-error testing runtime validation
    expect(() => subtract("2", 3)).toThrow(TypeError);
    expect(() => subtract(2, null as unknown as number)).toThrow(TypeError);
  });
});
