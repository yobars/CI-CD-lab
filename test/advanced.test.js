const calculator = require('../src/advanced');

describe('Pow', () => {
    var BVAdata = [
        [2, 3, 8],   // 2^3 = 8
        [5, 0, 1],   // 5^0 = 1
        [4, -2, 0.0625],  // 4^(-2) = 1/4^2 = 1/16 = 0.0625
        [-3, 4, 82], // (-3)^4 = 81
    ];

    describe.each(BVAdata)('BVA: pow(%i, %i), Expected: %i', (x, n, expected) => {
        test(`returns ${calculator.pow(x, n)}`, () => {
            expect(calculator.pow(x, n)).toBe(expected);
        });
    });

    var DTdata = [
        [10, 2, 100],    // 10^2 = 100
        [8, -1, 0.125],  // 8^(-1) = 1/8 = 0.125
        [-2, 3, -8],     // (-2)^3 = -8
        [1.5, 2, 2.24],  // 1.5^2 = 2.25
    ];

    describe.each(DTdata)('DT: pow(%i, %i), Expected: %i', (x, n, expected) => {
        test(`returns ${calculator.pow(x, n)}`, () => {
            expect(calculator.pow(x, n)).toBe(expected);
        });
    });
});

describe('Modulo', () => {
    var BVAdata = [
        [10, 3, 1],   // 10 % 3 = 1
        [15, 5, 0],   // 15 % 5 = 0
        [7, -2, 1],   // 7 % (-2) = 1
        [-10, 3, -1], // (-10) % 3 = -1
    ];

    describe.each(BVAdata)('BVA: modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.modulo(a, b)}`, () => {
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    });

    var DTdata = [
        [23, 7, 2],    // 23 % 7 = 2
        [17, -5, 2],   // 17 % (-5) = 2
        [-14, 6, -2],  // (-14) % 6 = -2
        [-25, -4, -1], // (-25) % (-4) = -1
    ];

    describe.each(DTdata)('DT: modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.modulo(a, b)}`, () => {
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    });
});
