let human = {
    mortal: true,
}

let socrates = Object.create(human);
socrates.age = 45;
console.log(socrates); // return 45
console.log(socrates.mortal); // return true
console.log(human.isPrototypeOf(socrates)); // return true