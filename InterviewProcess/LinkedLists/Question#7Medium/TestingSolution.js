/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);
const linkedList2 = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);
const linkedList3 = [5].reduce((acc, val) => new ListNode(val, acc), null);
const linkedList4 = [].reduce((acc, val) => new ListNode(val, acc), null);

// ---- Generate our linked list ----

const printList = (head) => {
    if(!head) {
        return;
    }

    console.log(head.val);
    printList(head.next);
}

// --------- Our solution -----------

var reverseBetween = function(head, m, n) {
    if (head == null) {
        return 0;
    }
    let currentPos = 1, currentNode = head;
    let start = head;

    while(currentPos < m) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }

    let newList = null, tail = currentNode;

    while(currentPos >= m && currentPos <= n) {
        const next = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = next;
        currentPos++;
    }

    start.next = newList;
    tail.next = currentNode;

    if(m > 1) {
        return head
    } else {
        return newList;
    }
};

console.log('after reverse');
printList(reverseBetween(linkedList, 2, 4));

console.log('after reverse');
printList(reverseBetween(linkedList2, 1, 5));

console.log('after reverse');
printList(reverseBetween(linkedList3, 1, 1));

console.log('after reverse');
printList(reverseBetween(linkedList4, 0, 0));
