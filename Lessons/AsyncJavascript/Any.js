const p1 = new Promise((resolve) => {
   setTimeout(() => resolve("A"), Math.floor(Math.random() * 1000));
});

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("B"), Math.floor(Math.random() * 1000));
});

const p3 = new Promise((resolve) => {
    setTimeout(() => resolve("C"), Math.floor(Math.random() * 1000));
});

(async function() {
    const result = await Promise.any([p1, p2, p3]);
    console.log(result);
})();