let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5;
    },
    sing() {
       if (this.fire) {
           return `I am ${this.name}, the breather of fire`;
       }
    }
};

console.log(dragon.name + ' :', dragon.sing()); // return Tanya, I am Tanya, the breather of fire
console.log(dragon.name + ' have fire :', dragon.fire); // return Tanya, true
console.log(dragon.name + ' fight :', dragon.fight()); // return Tanya, 5

let lizard = {
    name: 'Kiki',
    fight() {
        return 1;
    }
};

let babyDragon = {};


lizard.__proto__ = dragon; // never use __proto__ => bad for performances
console.log(lizard.name + ' :', lizard.sing()); // return Kiki, I am kiki, the breather of fire
console.log(lizard.name + ' have fire :', lizard.fire); // return Kiki, true
console.log(lizard.name + ' fight :', lizard.fight()); // return Kiki, 1

console.log(dragon.isPrototypeOf(lizard));

babyDragon.__proto__ = dragon; // never use __proto__ => bad for performances
console.log(babyDragon.name); // return Tanya

for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop)) {
        console.log("from lizard", prop); // return name & fight
    }
    console.log("from dragon", prop); // return name, fire, sing & fight
}