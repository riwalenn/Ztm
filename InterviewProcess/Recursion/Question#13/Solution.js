import {ConstantesArrayNumbers} from "../../../Exercices/Sort/Constantes.js";

export function quickSort(array, left, right) {
    let pivot;
    let partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(array, pivot, left, right);

        //sort left and right
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }
    return array;
}

function partition(array, pivot, left, right) {
    let pivotValue = array[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}
const array1 = [5,3,1,6,4,2];
const kToFind1 = 2;
const array2 = [2,3,1,2,4,2];
const kToFind2 = 4;
const array3 = [3];
const kToFind3 = 1;

var findKthLargest = function (nums, k) {
    const indexToFind = nums.length - k;
    quickSort(nums, 0, nums.length - 1);
    return nums[indexToFind]
};

console.log(findKthLargest(array1, kToFind1))
console.log(findKthLargest(array2, kToFind2))
console.log(findKthLargest(array3, kToFind3))