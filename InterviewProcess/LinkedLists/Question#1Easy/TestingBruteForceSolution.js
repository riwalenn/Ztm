class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode
        this.tail = newNode;
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
    reverse() {
        if (!this.head.next) {
            return this.head;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;

        return this.printList();
    }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.reverse();
console.log(myLinkedList.printList());

const myLinkedList2 = new LinkedList(3);
console.log(myLinkedList2.printList());

const myLinkedList3 = new LinkedList(null);
console.log(myLinkedList3.printList());