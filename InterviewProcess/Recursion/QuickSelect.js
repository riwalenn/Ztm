const swap = function (array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

const getPartition = function (array, leftPointer, rightPointer) {
    let i = leftPointer;

    for (let j = leftPointer; j <= rightPointer; j++) {
        if (array[j] <= array[rightPointer]) {
            swap(array, i, j);
            i++;
        }
    }
    return i - 1;
};

const quickSelect = function (array, leftPointer, rightPointer, indexToFind) {
    const partitionIndex = getPartition(array, leftPointer, rightPointer);

    if (partitionIndex === indexToFind) {
        return array[partitionIndex];
    } else if (indexToFind < partitionIndex) {
        return quickSelect(array, leftPointer, partitionIndex - 1, indexToFind);
    } else {
        return quickSelect(array, partitionIndex + 1, rightPointer, indexToFind);
    }
};

let findKthLargest = function (array, k) {
    const indexToFind = array.length - k;

    return quickSelect(array, 0, array.length - 1, indexToFind);
};

console.log(findKthLargest([5,3,1,6,4,2], 4))