import { ConstantesArrayNumbers } from './Constantes.js';
import { selectionSort } from './SelectionSort.js';
import { bubbleSort } from "./BubbleSort.js";
import { insertionSort } from "./InsertionSort.js";
import { mergeSort } from "./MergeSort.js";

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