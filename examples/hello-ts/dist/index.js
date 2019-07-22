"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
function timeout(n) {
    return new Promise(res => setTimeout(res, n));
}
/**
 * Add two numbers
 * @param a first number
 * @param b second
 */
async function addNumbers(a, b) {
    await timeout(500);
    return a + b;
}
exports.addNumbers = addNumbers;
//== Run the program ==//
(async () => {
    console.log(await addNumbers(3, 4));
})();
