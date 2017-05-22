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
binaryTree2.insert(7, binaryTree2.head);
binaryTree2.insert(0, binaryTree2.head);


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

let levelOrder = ''; //ALSO KNOWN AS BFS
function levelOrderTranversal(head) {
  if(head === null) {
    return head;
  }

  let queue = [];
  queue.push(head);

  while(queue.length > 0) {
    let node = queue.shift();
    levelOrder += node.data + ' ';

    if(node.left !== null) {
      queue.push(node.left);
    }

    if(node.right !== null) {
      queue.push(node.right);
    }
  }

}

//CAN BE RETURN -1 if height is number of edges, also known as max depth
function findHeightOfTree(root) {
  if(root === null) {
    return 0;
  }

  return Math.max(findHeightOfTree(root.left), findHeightOfTree(root.right)) + 1;
}

function findMinDepthOfTree(root) {
  if(root === null) {
    return 0;
  }

  if(root.left === null && root.right === null) {
    return 1;
  }

  if(root.left === null) {
    return findMinDepthOfTree(root.right) + 1
  }

  if(root.right === null) {
    return findMinDepthOfTree(root.left) + 1;
  }

  return Math.min(findMinDepthOfTree(root.left), findMinDepthOfTree(root.right)) + 1;
}

function topLevelView(root) {
  let leftStack = [];
  let rightQueue = [];

  let currentLeftNode = root;
  let currentRightNode = root;

  while(currentLeftNode.left !== null) {
    currentLeftNode = currentLeftNode.left;
    leftStack.push(currentLeftNode);
  }

  while(currentRightNode.right !== null) {
    currentRightNode = currentRightNode.right;
    rightQueue.push(currentRightNode);
  }

  let output = '';

  while(leftStack.length > 0) {
    output += leftStack.pop().data + ' ';
  }

  output += root.data + ' ';

  while(rightQueue.length > 0) {
    output += rightQueue.shift().data + ' ';
  }

  return output;
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

console.log('LEVEL ORDER TRANVERSAL');
levelOrderTranversal(binaryTree2.head);
console.log(levelOrder);

console.log('The height of a binary tree(MAX DEPTH)');
console.log(findHeightOfTree(binaryTree2.head));

console.log('FIND MIN DEPTH OF BINARY TREE(MIN DEPTH)');
console.log(findMinDepthOfTree(binaryTree2.head));

console.log('TOP LEVEL VIEW');
console.log(topLevelView(binaryTree2.head));


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

