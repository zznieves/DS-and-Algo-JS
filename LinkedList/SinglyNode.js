
/**
 * JavaScript file for implementing a Node Object
 */

class SinglyNode {

    // constructor
    constructor(data) {

        // Node properties
        this.data = data;
        this.next = null;
    }

    // methods: functionality
    // getters and setters

    // getData: get Node's data
    getData() {

        return this.data;
    }

    // setNext: set the next pointer to either a new Node or null
    setNext(newNode) {

        // newNode must either be a Node Object or null
        if(newNode instanceof SinglyNode || newNode === null) {

            this.next = newNode;
        }
        // if not, notify user
        else {

            console.error("Input must either be a Node Object or null.");
        }
    }

    // getNextNode: return the next Node in the path
    getNextNode() {

        return this.next;
    }
}

// export the Node class to be used in other files
module.exports = SinglyNode;