const binarySearch = (array, leftPointer, rightPointer, target) => {
    while (leftPointer <= rightPointer) {
        const mid = Math.floor((leftPointer + rightPointer) / 2);
        const foundValue = array[mid];
        if (foundValue === target) {
            return mid;
        } else if (foundValue < target) {
            leftPointer = mid + 1;
        } else {
            rightPointer = mid - 1;
        }
    }

    return -1;
};

const searchRange = function (array, target) {
    if (array.length < 1) return [-1, -1];
    const firstPos = binarySearch(array, 0, array.length - 1, target);

    if (firstPos === -1) return [-1, -1];

    let endPos = firstPos,
        startPos = firstPos,
        temp1,
        temp2;

    while (startPos !== -1) {
        temp1 = startPos;
        startPos = binarySearch(array, 0, startPos - 1, target);
    }
    startPos = temp1;

    while (endPos !== -1) {
        temp2 = endPos;
        endPos = binarySearch(array, endPos + 1, array.length - 1, target);
    }
    endPos = temp2;

    return [startPos, endPos];
};

console.log(searchRange([1,3,3,5,5,5,8,9], 6)); // return [-1,-1]
console.log(searchRange([1,3,3,5,5,5,8,9], 5)); // return [3,5]
console.log(searchRange([1,2,3,4,5,6], 4)); // return [3,3]
console.log(searchRange([], 3)); // return [-1,-1]