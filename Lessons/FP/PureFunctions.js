// no side effects
// input ---> output
const array = [1,2,3];
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}

function multiplyBy2(arr) {
    return arr.map(item => item * 2);
}

console.log(removeLastItem(array));
console.log((multiplyBy2(array)));