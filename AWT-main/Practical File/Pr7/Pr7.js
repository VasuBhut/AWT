const Calculator = require("./Pr7Export");

const calculator = new Calculator();

const resultAdd = calculator.add(10, 5);
console.log("10 + 5 =", resultAdd);

const resultSubtract = calculator.subtract(10, 5);
console.log("10 - 5 =", resultSubtract);

const resultMultiply = calculator.multiply(10, 5);
console.log("10 * 5 =", resultMultiply);

const resultDivide = calculator.divide(10, 5);
console.log("10 / 5 =", resultDivide);
