// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
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

    size() {
        let size = 0;
        let currentNode = this.head;

        while(currentNode) {
            size++;
            currentNode = currentNode.next;
        }

        return size;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if(!this.head) {
            return null;
        }

        let currentNode = this.head;

        while(currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(this.head) {
            if(!this.head.next) {
                this.head = null;
            } else {
                let next = this.head.next;
                this.head = next;
            }
        }
    }

    removeLast() {
        if(this.head) {

            if(!this.head.next) {
                this.head = null;
            } else {
                let currentNode = this.head;
                let prev = null;

                while(currentNode.next) {
                    prev = currentNode;
                    currentNode = currentNode.next;
                }
                prev.next = null;
            }

        }
    }

    insertLast(data) {
        if(this.head) {
            let currentNode = this.head;

            while(currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = new Node(data);

        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;

        while(node) {
            if(counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }

        return null;
    }

    removeAt(index) {
        let counter = 0;
        let currentNode = this.head;
        let prev = null;

        if(!this.head){
            return;
        }

        while(currentNode) {
            if(counter === index) {
                if(!prev) {
                    this.head = currentNode.next;
                    return;
                }
                prev.next = prev.next.next;
                return;
            }


            prev = currentNode;
            currentNode = currentNode.next;
            counter++;
        }
    }

    insertAt(data, index) {
        if(index >= this.size()) {
            this.insertLast(data);
            return;
        }

        if(!this.head || index === 0) {
            this.insertFirst(data);
            return;
        }


        let node = this.getAt(index);
        let prev = this.getAt(index - 1);
        let newNode = new Node(data, node);
        prev.next = newNode;
    }

    forEach(fn) {
        let currentNode = this.head;
        let index = 0;

        while(currentNode) {
            fn(currentNode, index);
            currentNode = currentNode.next;
            index++;
        }
    }

    *[Symbol.iterator]() { //For Of Loop :)
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }

    reverse() {
        let currentNode = this.head;
        let previous = null;

        while(currentNode !== null) {
            let tempNode = currentNode.next;
            currentNode.next = previous;
            previous = currentNode;
            currentNode = tempNode;
        }
        this.head = previous;
    }
}

module.exports = { Node, LinkedList };
