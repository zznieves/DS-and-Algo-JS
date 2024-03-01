// class file for implementing a Queue data structure

// import the DoublyLinkedList class to use as the underlying data structure
const LinkedList = require('../LinkedList/DoublyLinkedList.js');

class Queue {

    constructor() {

        // Queue properties
        this.queue = new LinkedList();
    }


    // methods: what the Queue can do

    // enqueue: add a new Node to the back of the Queue
    enqueue(value) {

        this.queue.append(value);
    }

    // dequeue: remove and return the Node at the front of the Queue
    dequeue() {

        // if the Queue is empty, notify the user
        if(this.queue.length === 0) {

            console.error("Cannot remove from an empty Queue. (Attempted the dequeue method)");
        }
        // if the Queue is not empty, remove the Node
        else {

            return this.queue.removeHead();
        }
    }

    // peek: return, but do not remove the Node at the beginning of the Queue
    peek() {

        // if the Queue is empty, notify the user
        if(this.queue.length === 0) {

            console.error("Queue is currently empty. (Attempted the peek method)");
        }
        // if the Queue is not empty, remove the Node
        else {

            return this.queue.head;
        }
    }
}