//Constructor Functions
function Elf(name, weapon) {
    // console.log(arguments); //{ '0': 'Peter', '1': 'stones' }
    // console.log("this", this); // return this Elf() {}

    this.name = name;
    this.weapon = weapon;

    // console.log("this", this); // this Elf { name: 'Peter', weapon: 'stones' }

}

Elf.prototype.attack = function () {
    return this.name + ' attack with ' + this.weapon;
}

Elf.prototype.build = function () {
    const self = this;
    function building() {
        return self.name + ' builds a house';
    }

    return building();
}

const peter = new Elf('Peter', 'stones');
// console.log("proto :", peter.__proto__); // { attack: [Function (anonymous)] }
console.log(peter.attack());
console.log(peter.build());

// const sam = new Elf('Sam', 'fire');
// console.log(sam.attack());

// const Elf1 = new Function('name', 'weapon', `this.name = name; this.weapon = weapon;`)
// const tanya = new Elf1('Tanya', 'fireworks')
// console.log(tanya)