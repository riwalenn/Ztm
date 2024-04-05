class QueueWithStacks {
    constructor() {
        this.in = [];
        this.out = [];
    }

    enqueue(val) {
        this.in.push(val);
    }

    dequeue() {
        if (this.out.length === 0) {
            while(this.in.length > 0) {
                this.out.push(this.in.pop());
            }
        }

        return this.out.pop();
    }

    peek() {
        if (this.out.length === 0) {
            while(this.in.length > 0) {
                this.out.push(this.in.pop());
            }
        }

        return this.out[this.out.length - 1];
    }

    empty() {
        return this.in.length === 0 && this.out.length === 0;
    }
}

const queue = new QueueWithStacks();
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
queue.enqueue(25);
console.log(queue);

console.log(queue.dequeue());

console.log(queue.peek());