class Person {
    constructor(name) {
        this.name = name;
        this.isAlive = true;
        this.children = [];
    }
}

class Monarchy {
    constructor(king) {
        this.king = new Person(king);
        this._persons = {
            [this.king.name]: this.king
        };
    }

    birth(childName, parentName) {
        const parent = this._persons[parentName];
        const newChild = new Person(childName);
        parent.children.push(newChild);
        this._persons[childName] = newChild;
    }

    death(name) {
        const person = this._persons[name];
        if (person === undefined) {
            return null;
        }
        person.isAlive = false;
    }

    getOrderOfSuccession(){
        const order = [];
        this._dfs(this.king, order);
        return order;
    }

    _dfs(currentPerson, order) {
        if(currentPerson.isAlive) {
            order.push(currentPerson.name);
        }
        for(let i = 0; i < currentPerson.children.length; i++) {
            this._dfs(currentPerson.children[i], order);
        }
    }
}

const monarchy = new Monarchy('Jake');
monarchy.birth('Catherine', 'Jake');
monarchy.birth('Jane', 'Catherine');
monarchy.birth('Farah', 'Jane');
monarchy.birth('Tom', 'Jake');
monarchy.birth('Celine', 'Jake');
monarchy.birth('Marc', 'Catherine');
monarchy.birth('Peter', 'Celine');


console.log(monarchy.getOrderOfSuccession());
monarchy.death('Jake');
monarchy.death('Jane');
console.log(monarchy.getOrderOfSuccession());