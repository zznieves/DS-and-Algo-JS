

// code for implementing a Linked List
class LinkedList {

    // constructor: initialize Linked List with a single Node
    constructor(data) {

        // LinkedList properties: head pointer
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }


    // append: insert a new Node at the end of the LinkedList
    append(data) {

        // create the newTail to be inserted
        const newTail = {
            value: data,
            next: null
        };

        // insert the newTail
        this.tail.next = newTail;
        this.tail = newTail;

        this.length++;
    }

    // prepend: insert a new element to the beginning of the LinkedList
    prepend(data) {

        // create the newHead to be inserted
        const newHead = {
            value: data,
            next: null
        };

        // insert the newHead
        newHead.next = this.head;
        this.head = newHead;

        this.length++;

    }
}

// test code
let l1 = new LinkedList(21);

console.log(l1);

l1.append(25);

console.log(l1);