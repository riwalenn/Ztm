import { ConstantesArrayNumbers } from './Constantes.js';

//if small input or items are mostly sorted => really, really fast
export function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            array.unshift(array.splice(i, 1)[0]);
        } else {
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j-1] && array[i] < array[j]) {
                    array.splice(j, 0, array.splice(i, 1)[0]);
                }
            }
        }
    }
}

insertionSort(ConstantesArrayNumbers);