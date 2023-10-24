var b = {
    name: 'jay',
    say() { console.log("b", this) }
}

var c = {
    name: 'jay',
    say() {
        return function () { console.log("c", this) }
    }
}

var d = {
    name: 'jay',
    say() { return () => console.log("d", this)}
}

b.say(); //object b
c.say()(); //window object
d.say()(); //object d

const character = {
    name: 'Simon',
    getCharacter() {
        return this.name;
    }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

console.log('?', giveMeTheCharacterNOW());