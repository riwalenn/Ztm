// Compose
const compose = (f, g) => (data) => f(g(data)); // arity of two

const multiplyBy3 = (num) => num * 3; // arity of one
const makePositive = (num) => Math.abs(num); // arity of one
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

console.log(multiplyBy3AndAbsolute(-50));



// Pipe
// fn1(fn2(fn3(50)))
const pipe = (f, g) => (data) => g(f(data)); // arity of two

