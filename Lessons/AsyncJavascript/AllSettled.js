const promiseOne = new Promise((resolve) => {
    setTimeout(resolve, 3000);
});

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(reject, 3000);
});

// Promise.all([promiseOne, promiseTwo]).then(data => console.log(data)); // undefined

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data)).catch(e => console.log("error", e));