import { ConstantesArrayNumbers } from './Constantes.js';
import { selectionSort } from './SelectionSort.js';
import { bubbleSort } from "./BubbleSort.js";
import { insertionSort } from "./InsertionSort.js";
import { mergeSort } from "./MergeSort.js";
import { quickSort } from "./QuickSort.js";

console.time("selectionSort")
selectionSort(ConstantesArrayNumbers)
console.timeEnd("selectionSort")

console.time("bubbleSort")
bubbleSort(ConstantesArrayNumbers)
console.timeEnd("bubbleSort")

console.time("insertionSort")
insertionSort(ConstantesArrayNumbers)
console.timeEnd("insertionSort")

console.time("mergeSort")
mergeSort(ConstantesArrayNumbers)
console.timeEnd("mergeSort")

console.time("quickSort")
quickSort(ConstantesArrayNumbers, 0, ConstantesArrayNumbers.length - 1);
console.timeEnd("quickSort")

console.time("simply sort")
ConstantesArrayNumbers.sort();
console.timeEnd("simply sort")

console.time("simply sort with localcompare")
ConstantesArrayNumbers.sort(function (a, b) {
    return a - b;
});
console.timeEnd("simply sort with localcompare")