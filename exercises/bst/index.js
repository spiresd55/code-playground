// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        this.insertNode(this, data);
    }

    insertNode(node, data) {
        if(data < node.data) {
            if(node.left) {
                this.insertNode(node.left, data)
            } else {
                node.left = new Node(data);
            }
        }else if(data > node.data) {
            if(node.right) {
                this.insertNode(node.right, data);
            } else {
                node.right = new Node(data);
            }
        }
    }

    contains(data) {
        let currentNode = this;

        while(currentNode) {
            if(data < currentNode.data && currentNode.left) {
                currentNode = currentNode.left;
            } else if(data > currentNode.data && currentNode.right) {
                currentNode = currentNode.right;
            } else if(data === currentNode.data) {
                return currentNode;
            } else {
                return null;
            }
        }
    }

    mirror() {
        this.mirrorBst(this);
    }


    mirrorBst(node) {
        if(node.left) {
            this.mirrorBst(node.left);
        }

        if(node.right) {
            this.mirrorBst(node.right);
        }

        //swap nodes
        let leftTemp = node.left;
        let rightTemp = node.right;
        node.left = rightTemp;
        node.right = leftTemp;
    }

}

module.exports = Node;
