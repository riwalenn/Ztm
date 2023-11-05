// Currying
const multiply = (a, b) => a*b;

console.log(multiply(3,4));

const curriedMultiply = (a) => (b) => a*b;
const curriedMultiplyBy5 = curriedMultiply(5);
console.log(curriedMultiplyBy5(8));
console.log(curriedMultiplyBy5(5));