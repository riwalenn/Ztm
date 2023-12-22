//Given a number N return the index value of the Fibonacci sequence, where the sequence is:

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
//the pattern of the sequence is that each value is the sum of the 2 previous values, that means for N=5 -> 2+3

let counter1 = 0;
function fibonacciIterative(n) {
    let arr = [0 , 1];

    for (let i = 2; i < n + 1; i++) {
        counter1++;
        arr.push(arr[i-2] + arr[i-1]);
    }

    return arr[n];
} //O(n)

console.time("fibonacciIterative")
console.log(fibonacciIterative(40));
console.log('we did ' + counter1 + ' calculations');
console.timeEnd("fibonacciIterative")

let counter2 = 0;
function fibonacciRecursive(n) {
    counter2++;
    if (n < 2) {
        return n;
    }

    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
} //O(2^N)

console.time("fibonacciRecursive")
console.log(fibonacciRecursive(40));
console.log('we did ' + counter2 + ' calculations');
console.timeEnd("fibonacciRecursive")

let counter3 = 0;
//with memoization
function fibonacciMaster() {
    let cache = {};
    return function fib(n) {
        if (n in cache) {
            counter3++;
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
               cache[n] = fib(n-1) + fib(n-2);
               return cache[n];
            }
        }
    }
} //O(n)

console.time("fibonacciMaster")
const fasterFib = fibonacciMaster();
console.log(fasterFib(40));
console.log('we did ' + counter3 + ' calculations');
console.timeEnd("fibonacciMaster")