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

/**
 * Multiplies two numbers.
 * @param a - The first factor
 * @param b - The second factor
 * @returns The product a * b
 */
export function multiply(a: number, b: number): number {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("multiply(a, b) expects both arguments to be numbers");
    }
    return a * b;
}

/**
 * Divides a by b.
 * @param a - The dividend
 * @param b - The divisor
 * @returns The quotient a / b
 * @throws RangeError if b is 0
 */
export function divide(a: number, b: number): number {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("divide(a, b) expects both arguments to be numbers");
    }
    if (b === 0) {
        throw new RangeError("divide(a, b) does not allow division by zero");
    }
    return a / b;
}

/**
 * Calculates the square root of x.
 * @param x - The input value
 * @returns The non-negative square root of x
 * @throws RangeError if x is negative
 */
export function sqrt(x: number): number {
    if (typeof x !== "number") {
        throw new TypeError("sqrt(x) expects the argument to be a number");
    }
    if (x < 0) {
        throw new RangeError("sqrt(x) does not allow negative numbers");
    }
    return Math.sqrt(x);
}

/**
 * Calculates the power of a base to an exponent.
 * @param base - The base number
 * @param exponent - The exponent number
 * @returns The result of base raised to the power of exponent
 */
export function power(base: number, exponent: number): number {
    if (typeof base !== "number" || typeof exponent !== "number") {
        throw new TypeError("power(base, exponent) expects both arguments to be numbers");
    }
    return base ** exponent;
}
