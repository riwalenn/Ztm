// HOF
const hof = (fn) => fn(5);
console.log(hof(function a(x){ return x })); // return 5

// Closure
const closure = function () {
    let count = 0;
    return function increment() {
        return count++;
    }
}
const incrementFn = closure();
console.log(incrementFn()); // return 0
console.log(incrementFn()); // return 1
console.log(incrementFn()); // return 2