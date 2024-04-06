const binarySearch = function (array, target) {
    let leftPointer = 0, rightPointer = array.length - 1;

    while (leftPointer <= rightPointer) {
        const midPointer = Math.floor((leftPointer + rightPointer) / 2);
        const foundValue = array[midPointer];
        if (foundValue === target) {
            return midPointer;
        } else if(foundValue < target) {
            leftPointer = midPointer + 1;
        } else {
            rightPointer = midPointer - 1;
        }
    }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 3));
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 7));
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 9));