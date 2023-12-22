import {ConstantesArrayNumbers} from './Constantes.js';
import {selectionSort} from './SelectionSort.js';
import {bubbleSort} from "./BubbleSort.js";

console.time("selectionSort")
selectionSort(ConstantesArrayNumbers)
console.timeEnd("selectionSort")

console.time("bubbleSort")
bubbleSort(ConstantesArrayNumbers)
console.timeEnd("bubbleSort")