"use strict";
/**
 * Generates d.ts declaration file
 * tsc src/d.ts/declaration.ts --declaration
 */
exports.__esModule = true;
exports.sum = exports.someStringVar = void 0;
exports.someStringVar = '';
function sum(_a) {
    var firstArg = _a.firstArg, secondArg = _a.secondArg;
    return firstArg + secondArg;
}
exports.sum = sum;
