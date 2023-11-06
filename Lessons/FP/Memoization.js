function addTo80(n) {
    console.log('Long time');
    return n + 80;
}

function memoizedAddTo80() {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80();

console.log(memoized(5)); // return long time & 85
console.log(memoized(3)); // return long time & 83
console.log(memoized(5)); // return 85