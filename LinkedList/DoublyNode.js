

// class for implementing a Node object for Doubly Linked-Lists
class DoublyNode {

    // constructor: JavaScript only supports having a single constructor
    constructor(data) {

        // Node properties
        this.value = data;
        this.next = null;
        this.prev = null;
    }

    // methods: what the Node object can do

    // getters and setter for Node properties

    // getValue: return the Nodes' value
    getValue() {

        return this.value;
    }

    // getNext: get the next Node in the path
    getNext() {

        return this.next;
    }

    // setNext: set the Nodes' next pointer to another Node or null
    setNext(newNode) {

        // newNode can either be a Node object, or null
        if(this.validateInput(newNode)) {

            this.next = newNode;
        }
        else {

            console.error("Node's next pointer must be set to a Node Object, or null.");
        }
    }



    // getPrev: get the previous Node in the path
    getPrev() {

        return this.prev;
    }

    // setPrev: set the Nodes' previous pointer to another Node or null
    setPrev(newNode) {

        // newNode must either be a Node object or null
        if(this.validateInput(newNode)) {

            this.prev = newNode;
        }
        else {

            console.error("Node's previous pointer must be set to a Node Object, or null.");
        }
    }




    // validInput(helper function): input must either be a Node or null
    validateInput(input) {

        return input instanceof DoublyNode || input === null;
    }
} 

// export the DoublyNode class to be used in other files
module.exports = DoublyNode;