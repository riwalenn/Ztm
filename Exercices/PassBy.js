/* -- pass by value -- */
var a = 4;
var b = a;

b++;
console.log(a); // return 4
console.log(b); // return 5


/* -- pass by reference -- */
let obj1 = { name: 'Yao', password: '123' };
let obj2 = obj1;

obj2.password = 'easypeasy';

console.log(obj1); // return easypeasy
console.log(obj2); // return easypeasy

var c = [1,2,3,4,5];
var d = c;
var e = [].concat(c);
d.push(158788);
e.push(989887);
console.log(d); // return [1,2,3,4,5,158788]
console.log(c); // return [1,2,3,4,5,158788] => because it's an object and passed by referenced by d
console.log(e); // return [1,2,3,4,5,989887]

let obj = { a: 'a', b: 'b', c: 'c' };
let clone = Object.assign({}, obj);
let clone2 = {...obj};

obj.c = 5;
console.log(obj) // return { a:'a', b:'b', c:5 }
console.log(clone) // return { a:'a', b:'b', c:'c' }
console.log(clone2) // return { a:'a', b:'b', c:'c' }

let newobj = { a: 'a', b: 'b', c: { deep: 'try and copy me' } };
let newclone = Object.assign({}, newobj); // shallow clone
let newclone2 = {...newobj};                    // shallow clone
let superClone = JSON.parse(JSON.stringify(newobj)); // deep clone

newobj.c.deep = 5;
console.log(newobj) // return { a: 'a', b: 'b', c: { deep: 5 } }
console.log(newclone) // return { a: 'a', b: 'b', c: { deep: 5 } }
console.log(newclone2) // return { a: 'a', b: 'b', c: { deep: 5 } }
console.log(superClone) // return { a: 'a', b: 'b', c: { deep: 'try and copy me' } }