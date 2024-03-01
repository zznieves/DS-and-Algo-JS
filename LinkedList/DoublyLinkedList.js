
// class for implementing a Doubly Linked List

// import the DoublyNode class
const Node = require('./DoublyNode.js');



class DoublyLinkedList {

    // constructor
    constructor() {

        // Linked List properties
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    // append: add a new Node to the end of the List
    append(value) {

        // create the new Node to be inserted
        const newTail = new Node(value);

        // if the List is empty, make newNode the head and tail
        if(this.tail === null) {

            this.head = newTail;
            this.tail = newTail;
        }
        // if the List is not empty, append the newTail
        else {
            
            let oldTail = this.tail;

            oldTail.setNext(newTail);
            newTail.setPrev(oldTail);
            this.tail = newTail;
        }

        // we added a new element, increment length property
        this.length++;
    }

    // prepend: add a new Node to the beginning of the List
    prepend(value) {

        // create the newHead to insert
        const newHead = new Node(value);

        // if the List is empty, make newHead the head and tail
        if(this.head === null) {

            this.head = newHead;
            this.tail = newHead;
        }
        // if the List is not empty, prepend the newHead
        else {

            let oldHead = this.head;

            oldHead.setPrev(newHead);
            newHead.setNext(oldHead);
            this.head = newHead;
        }

        // we added a new element, increment length property
        this.length++;
    }

    // removeTail: remove the current Tail from the List
    removeTail() {

        // get the old tail to return to the user
        let oldTail = this.tail;

        // if the List is empty, notify user
        if(this.tail === null) {

            console.log("Cannot remove from an empty List. (attempted to remove tail)");
        }
        // if the List is not empty, remove the tail
        else {
            let newTail = oldTail.getPrev();

            oldTail.setPrev(null);
            newTail.setNext(null);
            this.tail = newTail;
        }

        // we removed a Node, decrement the length property
        this.length--;

        return oldTail;
    }

    // removeHead: remove the current Head from the List
    removeHead() {

        // get the old head to return to the user
        let oldHead = this.head;

        // if the List is empty, notify the user
        if(this.head === null) {

            console.log("Cannot remove from an empty List. (attempted to remove head");
        }
        // if the List is not empty, remove the head
        else {

            let newHead = oldHead.getNext();

            oldHead.setNext(null);
            newHead.setPrev(null);

            this.head = newHead;
        }

        // we removed a Node, decrement the length property
        this.length--;

        return oldHead;
    }

    // insert: insert a new Node into the List, providing an index
    insert(index, value) {

        // create the new Node to be inserted
        const newNode = new Node(value);

        // is the List empty?
        if(this.head === null) {

            this.head = newNode;
            this.tail = newNode;
        }
        // if the List is not empty
        // is the index 0?
        else if(index === 0) {

            return this.prepend(newNode);
        }
        // is the index greater than or equal to the List length?
        else if(index >= this.length) {

            return this.append(newNode);
        }
        // if the index is somewhere in the middle of the List (between the head and tail)
        else {

            let currentNode = this.head;
            let count = 1;

            while(count !== index) {

                currentNode = currentNode.getNext();
                count++;
            }

            // we are now at the target index
            let a = currentNode.getPrev();
            let b = newNode;
            let c = currentNode;

            a.setNext(b);
            b.setPrev(a);
            b.setNext(c);
            c.setPrev(b);
        }

        // we added a new Node to the List, increment the length property
        this.length++;
    }

    // delete: delete an existing Node from the List, providing an index
    delete(index) {

        // if the List is empty
        if(this.head === null) {

            console.error("Cannot remove from an empty List. (Attempted the delete method)")
        }
        // if the index doesn't exist within the List
        else if(index > this.length) {

            console.error("Index currently does not exist within List. (Attempted the delete method")
        }
        // the index is the head
        else if(index === 0) {

            return this.removeHead();
        }
        // if the index is the tail
        else if(index === this.length) {

            return this.removeTail();
        }
        // the index is somewhere between head and tail (within the List)
        else {

            let currentNode = this.head;
            let count = 1;

            while(count !== index) {

                currentNode = currentNode.getNext();
                count++;
            }

            // we are now at the target index (Node to remove)

            let a = currentNode.getPrev();
            let b = currentNode;
            let c = b.getNext();

            a.setNext(c);
            c.setPrev(a);

            b.setPrev(null);
            b.setNext(null);

            this.length--;

            return b;
        }
    }

    // printList: print the current List
    printList() {
        
        let listString = "<head>";
        let currentNode = this.head;
        let count = 1;

         while(currentNode !== null) {

            listString = listString.concat(` Node #${count}: ${currentNode.getValue()} -->`);
            currentNode = currentNode.getNext();
            count++;
        }

        listString = listString.concat(" <tail>");

        console.log(listString);
    }


}

// export the Doubly Linked List to be used in other files
module.exports = DoublyLinkedList;