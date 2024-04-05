function tailFactorial(x, totalSoFar = 1) {
    if (x === 0) {
        return totalSoFar;
    } else {
        return tailFactorial(x - 1, totalSoFar * x);
    }
}

console.log(tailFactorial(4));
console.log(tailFactorial(4, 1));
console.log(tailFactorial(3, 4));
console.log(tailFactorial(2, 12));
console.log(tailFactorial(1, 24));
console.log(tailFactorial(0, 24));