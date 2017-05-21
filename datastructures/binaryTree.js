console.log('TREE OUTPUT');

//TODO: Implement a binary search tree
class BinaryTreeNode {

  constructor(data, parent, left, right) {
    this.parent = parent;
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

class BinaryTree {

  constructor() {
    this.length = 0
    this.head = null;
  }

  insert(value, node) {
    //console.log('value: ' + value);
    //console.log(node);
    // let currentNode = this.head;
    let currentNode = node ? node : this.head;

    if(this.head === null) {
      this.head = new BinaryTreeNode(value, null, null, null);
      this.length++;
    } else {
      console.log('else ' + value);
      console.log(currentNode.data);
      if(value < currentNode.data && currentNode.left === null) {
        currentNode.left = new BinaryTreeNode(value, currentNode, null, null);
        length++;
      } else if( value > currentNode.data && currentNode.right === null) {
        currentNode.right = new BinaryTreeNode(value, currentNode, null, null);
        length++;
      } else if(value < currentNode.data && currentNode.left !== null) {
        this.insert(value, currentNode.left);
      }else if(value > currentNode.data && currentNode.right !== null) {
        this.insert(value, currentNode.right);
      }

    }

  }

  transverseTree(node) {
    console.log(node.data);

    if(node.left) {
      this.transverseTree(node.left);
    }

    if(node.right) {
      this.transverseTree(node.right);
    }

  }

  findMinimum() {
    let currentNode = this.head;

    while(currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }

  findMaximum() {
    let currentNode = this.head;

    while(currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode;
  }

  //TODO: write an algorithim to sort a tree (page95)
  //sortAsc() {
  //  let min = findMinimum();
  //  let sortedArray = [];
  //
//    sortedArray.push(min);
//  }

  //TODO: Write an algorithim to delete from this tree (PAGE 93)
}

let binaryTree = new BinaryTree();

binaryTree.insert(1, binaryTree.head);
binaryTree.insert(2000, binaryTree.head);
binaryTree.insert(30, binaryTree.head);
binaryTree.insert(40000, binaryTree.head);
binaryTree.insert(56, binaryTree.head);
binaryTree.insert(0, binaryTree.head);
console.log(binaryTree.head);

console.log('FINDING MINIMUM');
console.log(binaryTree.findMinimum());

console.log('FINDING MAXIMUM');
console.log(binaryTree.findMaximum());

//binaryTree.transverseTree(binaryTree.head);

//TODO: Implement a balanced binary search tree
//TODO: Implement a weighted binary search tree

//3 5 2 1 4 6
let binaryTree2 = new BinaryTree();
binaryTree2.insert(3, binaryTree2.head);
binaryTree2.insert(5, binaryTree2.head);
binaryTree2.insert(2, binaryTree2.head);
binaryTree2.insert(1, binaryTree2.head);
binaryTree2.insert(4, binaryTree2.head);
binaryTree2.insert(6, binaryTree2.head);


//https://en.wikipedia.org/wiki/Tree_traversal
let output = ' ';
function preOrderTranversal(head) {
  if(head === null) {
    return head;
  }

  output += ' ' + head.data;

  if(head.left) {
    preOrderTranversal(head.left);
  }

  if(head.right) {
    preOrderTranversal(head.right);
  }
}

let postOutput = '';
function postOrderTranversal(head) {
  if(head === null) {
    return head;
  }

  postOrderTranversal(head.left);
  postOrderTranversal(head.right);

  postOutput += ' ' + head.data;
}

let inOrder = '';
function inOrderTranversal(head) {
  if(head === null) {
    return head;
  }

  inOrderTranversal(head.left);

  inOrder += ' ' + head.data;

  inOrderTranversal(head.right);

}

//CAN BE RETURN -1 if height is number of edges
function findHeightOfTree(root) {
  if(root === null) {
    return 0;
  }

  return Math.max(findHeightOfTree(root.left), findHeightOfTree(root.right)) + 1;
}

console.log('PRE ORDER TRANSVERSAL');
preOrderTranversal(binaryTree2.head);
console.log(output);

console.log('POST ORDER TRANVERSAL');
postOrderTranversal(binaryTree2.head);
console.log(postOutput);

console.log('IN ORDER TRANVERSAL');
inOrderTranversal(binaryTree2.head);
console.log(inOrder);

console.log('The height of a binary tree');
console.log(findHeightOfTree(binaryTree2.head));


/* JAVA SOLUTION
 String output = "";

 void preOrder(Node root) {
 if(root == null) {
 }

 System.out.print(root.data + " ");

 if(root.left != null) {
 preOrder(root.left);
 }

 if(root.right != null) {
 preOrder(root.right);
 }
 }
 */

