//Given an array = [2,5,1,2,3,5,1,2,4]:
//which one gets repeted first
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined
const firstArray = [2,5,1,2,3,5,1,2,4];
const secondArray = [2,1,1,2,3,5,1,2,4];
const thirdArray = [2,3,4,5];

// naive/brut force approach
function firstReccuringBrutApproach(arr) {
   for (let i = 0; i < arr.length; i++) {
       for (let j = i + 1; j < arr.length; j++) {
           if (arr[i] === arr[j]) {
               return arr[j];
           }
       }
   }
} //O(n^2)

function firstReccuringNewApproach(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] !== undefined) {
            return arr[i];
        } else {
            map[arr[i]] = i;
        }
    }

    return undefined;
} //O(n)

console.log("---- first reccuring ----");
console.log(firstReccuringBrutApproach(firstArray));
console.log(firstReccuringBrutApproach(secondArray));
console.log(firstReccuringBrutApproach(thirdArray));


console.log("---- second reccuring ----");
console.log(firstReccuringNewApproach(firstArray));
console.log(firstReccuringNewApproach(secondArray));
console.log(firstReccuringNewApproach(thirdArray));