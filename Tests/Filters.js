const TYPE_PERSONNAL_COMPUTER = 1;
const TYPE_LAPTOP             = 2;

const liste = [
    { id: 0, name: 'pc 1', active: true, type: TYPE_PERSONNAL_COMPUTER },
    { id: 1, name: 'laptop 1', active: false, type: TYPE_LAPTOP },
    { id: 2, name: 'pc 2', active: true, type: TYPE_PERSONNAL_COMPUTER },
    { id: 3, name: 'pc 3', active: false, type: TYPE_PERSONNAL_COMPUTER },
    { id: 4, name: 'laptop 2', active: true, type: TYPE_LAPTOP },
    { id: 5, name: 'pc 4', active: false, type: TYPE_PERSONNAL_COMPUTER },
    { id: 6, name: 'pc 5', active: true, type: TYPE_PERSONNAL_COMPUTER },
    { id: 7, name: 'laptop 3', active: false, type: TYPE_LAPTOP },
    { id: 8, name: 'pc 6', active: false, type: TYPE_PERSONNAL_COMPUTER },
    { id: 9, name: 'laptop 4', active: true, type: TYPE_LAPTOP },
    { id: 10, name: 'pc 7', active: true, type: TYPE_PERSONNAL_COMPUTER },
];

let results1 = [];
let results2 = [];
let results3 = [];
let results4 = [];
let results5 = [];
let results6 = [];

const compose = (f, g) => (data) => f(g(data));

const filterStatus = (data) => data.filter(d => d.active === true);
const filterType   = (data) => data.filter(d => d.type === TYPE_PERSONNAL_COMPUTER);

const filteredList = compose(filterType, filterStatus);

results1 = { ...filteredList(liste)};
filteredList(liste).forEach((v) => results2.push(v));

results3 = filteredList(liste);
filteredList(liste).forEach((v) => results4 = { ...v})

results5 = Object.assign({}, filteredList(liste))

results6 = JSON.parse(JSON.stringify(filteredList(liste)));

const test = { name: 'test', active: true, type: TYPE_PERSONNAL_COMPUTER };

liste.push(test)

// results1.push(test);
results2.push(test);
results3.push(test);
// results4.push(test);
// results5.push(test);
results6.push(test);

console.log("result 1", results1);
console.log("result 2", results2);
console.log("result 3", results3);
console.log("result 4", results4);
console.log("result 5", results5);
console.log("result 6", results6);