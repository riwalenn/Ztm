class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }

    size() {
        return this._heap.length;
    }

    peek() {
        return this._heap[0];
    }

    isEmpty() {
        return this._heap.length === 0;
    }

    _parent(index) {
        return Math.floor((index - 1) / 2);
    }

    _leftChild(index) {
        return index * 2 + 1;
    }

    _rightChild(index) {
        return index * 2 + 2;
    }

    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }

    _compare(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }

    push(value) {
        this._heap.push(value);
        this._siftUp();

        return this.size();
    }

    _siftUp() {
        let nodeindex = this.size() - 1;

        while (0 < nodeindex && this._compare(nodeindex, this._parent(nodeindex))) {
            this._swap(nodeindex, this._parent(nodeindex));
            nodeindex = this._parent(nodeindex);
        }
    }

    pop() {
        if (this.size() > 1) {
            this._swap(0, this.size() - 1);
        }

        const poppedValue = this._heap.pop();
        this._siftDown();
        return poppedValue;
    }

    _siftDown() {
        let nodeindex = 0;

        while (
            (this._leftChild(nodeindex) < this.size() &&
                this._compare(this._leftChild(nodeindex), nodeindex)) ||
            (this._rightChild(nodeindex) < this.size() &&
                this._compare(this._rightChild(nodeindex), nodeindex))
            ) {
            const greaterChildindex =
                this._rightChild(nodeindex) < this.size() &&
                this._compare(this._rightChild(nodeindex), this._leftChild(nodeindex))
                    ? this._rightChild(nodeindex)
                    : this._leftChild(nodeindex);

            this._swap(greaterChildindex, nodeindex);
            nodeindex = greaterChildindex;
        }
    }
}

const priorityQueue = new PriorityQueue();
priorityQueue.push(15);
priorityQueue.push(12);
priorityQueue.push(50);
priorityQueue.push(7);
priorityQueue.push(40);
priorityQueue.push(22);

while(!priorityQueue.isEmpty()) {
    console.log(priorityQueue.pop());
}