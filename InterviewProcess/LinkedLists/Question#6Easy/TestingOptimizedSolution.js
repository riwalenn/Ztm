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
const linkedList2 = [1,2,3,4,5].reduce((acc, val) => new ListNode(val, acc), null);
const linkedList3 = [3].reduce((acc, val) => new ListNode(val, acc), null);
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

var reverseList = function(head) {
    let prev = null;
    let current = head;

    while(current) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
};

console.log('before reverse')
printList(linkedList);
console.log('after reverse')
printList(reverseList(linkedList))

console.log('before reverse')
printList(linkedList2);
console.log('after reverse')
printList(reverseList(linkedList2))

console.log('before reverse')
printList(linkedList3);
console.log('after reverse')
printList(reverseList(linkedList3))

console.log('before reverse')
printList(linkedList4);
console.log('after reverse')
printList(reverseList(linkedList4))
