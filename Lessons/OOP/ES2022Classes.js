class Employee {
    #name = "Test"; // private field
    setName(name) {
        this.#name = name;
    }
}
const emp = new Employee();
emp.#name = 'New'; // error
emp.setName('New'); // ok


class Employee {
    #name = "Test";
    constructor(name) {
        this.#setName(name) // ok
    }
    #setName(name) { // Private method
        this.#name = name;
    }
}
const emp = new Employee('New'); // ok
emp.#setName('New'); // error