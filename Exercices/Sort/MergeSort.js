import { ConstantesArrayNumbers } from './Constantes.js';

//really, good because of the divide and conquer
//if you have huge files that can't be sorted in memory, won't care about space complexity
export function mergeSort(array) {
    let length = array.length;
    if (length === 1) {
        return array;
    }
    const middle = Math.floor(length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

mergeSort(ConstantesArrayNumbers);