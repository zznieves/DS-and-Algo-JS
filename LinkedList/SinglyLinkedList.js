

/**
 * Class file for implementing a Singly Linked List
 */

// import the Node class
const Node = require('./SinglyNode.js');

class LinkedList {

    // constructor
    constructor() {

        // Singly LinkedList properties
        this.head = null;
        this.length = 0;
    }

    // methods: what the LinkedList can do

    // append: add a new Node at the end of the LinkedList
    append(value) {

        // create the newNode to append
        const newNode = new Node(value);


        // if the LinkedList is empty, make newNode the head
        if(this.head === null) {

            this.head = newNode;
        }
        // if not, go to the last Node in the List and connect the newNode
        else {

            let currentNode = this.head;

            while(currentNode.getNextNode() !== null) {

                currentNode = currentNode.getNextNode();
            }

            currentNode.setNext(newNode);
        }

        this.length++;
    }

    // prepend: add a new Node at the beginning of the LinkedList
    prepend(value) {

        // create the newHead to be prepended
        const newHead = new Node(value);

        // if the List is empty
        if(this.head === null) {

            this.head = newHead;
        }
        // if the List is not empty
        else {

            newHead.setNext(this.head);
            this.head = newHead;
        }

        this.length++;
    }


    // insert: insert an element anywhere in the List
    insert(value, index) {

        // is the List empty? or is the index 0?
        if(this.head === null || index === 0) {

            // insert the new Node at the beginning of the List
            return this.prepend(value);
        }
        // is the index at the end or greater than the List length?
        else if(index >= this.length) {

            // insert the new Node at the end of the List
            return this.append(value);
        }
        // index is somewhere in the middle of the List
        else {

            // traverse to the Node that comes before the index
            let currentNode = this.head;
            let count = 1;

            while(count !== (index - 1)) {
                currentNode = currentNode.getNextNode();
                count++;
            }

            // we are at the Node before the index (Node a)
            let a = currentNode;
            let b = new Node(value);
            let c = currentNode.getNextNode();

            a.setNext(b);
            b.setNext(c);

            this.length++;

        }
    }


    // removeHead: remove the current head of the List
    removeHead() {

        // if the List is empty
        if(this.head === null) {

            console.error("Cannot remove from an empty List.");
        }
        // if not empty, remove the head
        else {

            let removedHead = this.head;
            this.head = this.head.getNextNode();
            this.length--;

            return removedHead;
        }
    }

    // remove: remove any Node based on the given index
    remove(index) {

        // if the List is empty, or the index is greater than the List length
        if(this.head === null || (index > this.length)) {

            console.error("Index doesn't currently exist within List.");

        }
        // if the index is 0 (the head)
        else if(index === 0) {

            return this.removeHead();
        }
        // any other index within the List
        else {

            let currentNode = this.head;
            let count = 1;

            while(count !== (index - 1)) {

                currentNode = currentNode.getNextNode();
                count++;
            }

            // we are now at the Node before the target Node
            console.log("Current Node: " + currentNode.get)
            let a = currentNode;
            let b = a.getNextNode();
            let c = b.getNextNode();

            a.setNext(c);
            b.setNext(null);
            this.length--;

            return b;
        }
    }
}