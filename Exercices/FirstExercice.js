function importantPerson() {
    console.log(name + '!')
}
const name = 'Sunny';
const obj1 = {
    name: 'Cassy',
    importantPerson: importantPerson
}

const obj2 = {
    name: 'Jacob',
    importantPerson: importantPerson
}

importantPerson()