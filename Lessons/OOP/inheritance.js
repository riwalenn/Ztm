class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        // console.log('what am i?', this); this gives an error
        super(name, weapon)
        console.log('what am i?', this);
        this.type = type;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() { // this is like extending our prototype.
        return `strongest ${this.color} fort in the world made`
    }
}

const houseElf = new Elf('Dolby', 'cloth', 'house')
//houseElf.makeFort() // error
const shrek = new Ogre('Shrek', 'club', 'green')
console.log(shrek.makeFort());

console.log(Ogre.prototype.isPrototypeOf(shrek))
console.log(Character.prototype.isPrototypeOf(Ogre.prototype))
console.log(shrek instanceof Ogre)
console.log(shrek instanceof Character)