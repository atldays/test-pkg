/**
 * Adds two numbers.
 * @param a - The first number
 * @param b - The second number
 * @returns The sum of a and b
 */
export function add(a: number, b: number): number {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("add(a, b) expects both arguments to be numbers");
    }
    return a + b;
}

/**
 * Subtracts b from a.
 * @param a - The minuend
 * @param b - The subtrahend
 * @returns The difference a - b
 */
export function subtract(a: number, b: number): number {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("subtract(a, b) expects both arguments to be numbers");
    }
    return a - b;
}
