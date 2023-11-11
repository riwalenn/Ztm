// Create a function that reverses a string

function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return "You need to write a string with a minimum of 2 caracteres.";
    }

    let newString = '';
    const stringLength = str.length -1;
    for (let i = stringLength; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}

const reverse2 = str => str.split('').reverse().join('');

const reverse3 = str => [...str].reverse().join('');

function splitString(str) {
    return str.split('');
}

function reverseArray(str) {
    return str.reverse();
}

function arrayToString(str) {
    return str.join("");
}
const compute = (f, g, h) => (str) => f(g(h(str)));

const reverse4 = compute(arrayToString, reverseArray, splitString);

console.log(reverse('Hi My name is Riwalenn !')); // using concat
console.log(reverse2('Hi My name is Riwalenn !')); // using split, reverse and join
console.log(reverse3('Hi My name is Riwalenn !')); // using soft copy, reverse and join
console.log(reverse4('Hi My name is Riwalenn !')); // using compute with split, reverse and join