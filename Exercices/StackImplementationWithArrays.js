class Stack {
    constructor() {
        this.array = [];
    }
    peek() { // see the top of the stack
        return this.array[this.array.length-1];
    }
    push(value) {
        this.array.push(value);
    }
    pop() {
        this.array.pop();
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('youtube')
myStack.pop();
console.log(myStack.peek());