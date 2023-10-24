const wizard = {
    name: 'Merlin',
    health: 100,
    heal(num1, num2) {
        return this.health += num1 + num2;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

console.log('1', archer)
wizard.heal.call(archer, 50, 30)
console.log('2', archer)
const healArcher = wizard.heal.bind(archer, 50, 30)
healArcher()
console.log('3', archer)
wizard.heal.apply(archer, [50, 30])
console.log('4', archer)