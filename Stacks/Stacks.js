// class for implementing a Stack Data Structure with a Doubly Linked List

// import the Doubly Linked List class to construct a Stack
const LinkedList = require('../LinkedList/DoublyLinkedList.js');


class Stack {

    // constructor: JavaScript only supports a single constructor for classes
    constructor() {

        // Stack properties
        this.stack = new LinkedList();
    }


    // methods: what the Stack can do

    // push: insert a new Node on-top of the Stack
    push(value) {

        this.stack.append(value);
    }

    // pop: remove and return the Node at the top of the Stack
    pop() {

        // if the Stack is empty, notify the user
        if(this.stack.length === 0) {

            console.error("Cannot remove from an empty Stack. (Attempted the pop method)");
        }
        // if the Stack is not empty, get the Node
        else {

            return this.stack.removeTail();
        }
    }

    // peek: return, but do not remove the Node at the top of the Stack
    peek() {

        // if the Stack is empty, notify the user
        if(this.stack.length === 0) {

            console.error("Stack is currently empty. (Attempted the peek method)");
        }
        // if the Stack is not empty
        else {

            return this.stack.tail;
        }

    }
}