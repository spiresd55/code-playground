// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        if(this.head === null) {
            this.head = new Node(data, null);
        } else {
            let ref = this.head;
            this.head = new Node(data, ref);
        }
    }
}

module.exports = { Node, LinkedList };
