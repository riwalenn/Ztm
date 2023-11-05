//Immutability
const obj = { name: 'Andrei' };
function clone(obj) {
    return {...obj};
}
obj.name = 'Nana';