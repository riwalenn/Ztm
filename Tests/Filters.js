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

let results = [];
const compose = (f, g) => (data) => f(g(data));

const filterStatus = (data) => data.filter(d => d.active === true);
const filterType   = (data) => data.filter(d => d.type === TYPE_PERSONNAL_COMPUTER);

const filteredList = compose(filterType, filterStatus);

results = { ...filteredList(liste)};
console.log(results);