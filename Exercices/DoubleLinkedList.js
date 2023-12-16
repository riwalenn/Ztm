class DoubleLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode
        this.tail = newNode;
        this.length++;
        return this.printList();
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        };

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this.printList();
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value) {
        if(index === 0) {
            return this.prepend(value);
        }

        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = {
            value: value,
            next: null,
            prev: null
        };

        const previousNode = this.traverseToIndex(index-1);
        const follower = previousNode.next;

        previousNode.next = newNode;
        newNode.prev = previousNode;
        newNode.next = follower;
        follower.prev = newNode;

        this.length++;
        return this.printList();
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        const previousNode = this.traverseToIndex(index-1);
        const nodeToDelete = previousNode.next;
        const nextNode = nodeToDelete.next;

        previousNode.next = nodeToDelete.next;
        nextNode.prev = previousNode;
        nodeToDelete.next = nextNode;
        nextNode.prev = previousNode.next;


        this.length--;
        return this.printList();
    }
}

//1-->10-->5-->16 add 1 with prepend
//1-->10-->99-->5-->16 add 99 at index 2
const myDoubleLinkedList = new DoubleLinkedList(10);
myDoubleLinkedList.append(5);
myDoubleLinkedList.append(16);
myDoubleLinkedList.prepend(1);
myDoubleLinkedList.insert(0, 9);
myDoubleLinkedList.insert(2, 99);
myDoubleLinkedList.insert(200, 999);
myDoubleLinkedList.remove(2);
console.log(myDoubleLinkedList.printList());
