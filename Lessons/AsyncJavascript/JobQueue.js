// Callback Queue - Task Queue
setTimeout(() => { console.log('1', 'is the loneliest number') }, 0); // third
setTimeout(() => { console.log('2', 'can be as bad as one') }, 10); // fourth

// Job Queue - Microtask Queue
Promise.resolve('hi').then((data) => console.log('2', data)); // second

console.log('3', 'is a crowd') // first because not async