const letters = ['a', 'z', 'b', 'r', 'm', 'e'];

console.log(letters.sort()) // return [ 'a', 'b', 'e', 'm', 'r', 'z' ]

const basket = [2, 65, 34, 2, 1, 7, 8];

console.log(basket.sort()); //[1, 2, 2, 34, 65, 7, 8]
basket.sort(function (a, b) {
    return a - b;
})
console.log(basket); //return [1,  2,  2, 7, 8, 34, 65]

//why //[1, 2, 2, 34, 65, 7, 8] ?
//because the sort is done in strings not in numbers
//sort => '2'.charCodeAt(0)

console.log('2'.charCodeAt(0)) // return 50 (unicode result)
console.log('69'.charCodeAt(0)) // return 54 (unicode result)
console.log('7'.charCodeAt(0)) // return 55 (unicode result)

//the time and space complexity of the sort cannot be guaranteed as it is implementation dependent
const spanish = ['ùnico', 'àrbol', 'cosas', 'fùtbol'];
console.log(spanish.sort()); // return [ 'cosas', 'fùtbol', 'àrbol', 'ùnico' ]

spanish.sort((a, b) => a.localeCompare(b));
console.log(spanish); //return [ 'àrbol', 'cosas', 'fùtbol', 'ùnico' ]
