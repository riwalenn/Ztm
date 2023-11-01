/* -- pass by value -- */
let a = 4;
let b = a;

b++;
console.log(a); // return 4
console.log(b); // return 5


/* -- pass by reference -- */
let obj1 = { name: 'Yao', password: '123' };
let obj2 = obj1;

obj2.password = 'easypeasy';

console.log(obj1); // return easypeasy
console.log(obj2); // return easypeasy

let c = [1,2,3,4,5];
let d = c;
let e = [].concat(c);
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
// const myDeepCopy = structuredClone(myOriginal); // structured clonde

newobj.c.deep = 5;
console.log(newobj) // return { a: 'a', b: 'b', c: { deep: 5 } }
console.log(newclone) // return { a: 'a', b: 'b', c: { deep: 5 } }
console.log(newclone2) // return { a: 'a', b: 'b', c: { deep: 5 } }
console.log(superClone) // return { a: 'a', b: 'b', c: { deep: 'try and copy me' } }

/*
For the longest time, you had to resort to workarounds and libraries to create a deep copy of a JavaScript object.
However, most browsers have a new structuredClone(), a built-in function for deep-copying!
 */

/* -- compare object -- */
let user1 = {name : "nerd", org: "dev"};
let user2 = {name : "nerd", org: "dev"};
let eq = user1 == user2;
console.log(eq); // gives false
let eq2 = JSON.stringify(user1) === JSON.stringify(user2);
console.log(eq2); // gives true