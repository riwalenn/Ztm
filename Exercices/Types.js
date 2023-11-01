// primitive type
console.log("number:", typeof 5);
console.log("bool:", typeof true);
console.log("string:", typeof 'To be or not to be');
console.log("undefined:", typeof undefined);
console.log("should be null but is object instead:", typeof null);
console.log("Symbol:", typeof Symbol('juste me'));

// wrappers
String();
Number();
Boolean();

// examples
let isTrue = true;
console.log(typeof isTrue); // return boolean
isTrue = Boolean(isTrue).toString();
console.log(typeof isTrue); // return string


// Non-primitive type
console.log("object:", typeof {});
console.log("object:", typeof []);
console.log("function:", typeof function () {}); //not a type => object instead

function a() {
    return 5;
}

a.hi = 'hihihihi';

console.log(a.hi) // return hihihihi