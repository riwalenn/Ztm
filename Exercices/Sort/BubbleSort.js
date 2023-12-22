import { ConstantesArrayNumbers } from './Constantes.js';

//rare using (not efficient)
export function bubbleSort(array) {
    const length = array.length
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;

}

bubbleSort(ConstantesArrayNumbers)
