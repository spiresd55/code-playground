// Code goes here

//Linked List Operators

class LinkListNode {

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyList {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(data) {
    let node    = new LinkListNode(data),
        currentNode = this.head;

    //Empty List
    if(!currentNode) {
      this.head = node;
      this.length++;
      return node;
    }

    //Continue Transversing the list
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.length++;

    return node;
  }

  insertAtHead(data) {
    let node = new LinkListNode(data);
    let currentNode = this.head;

    if(!currentNode) {
      //console.log('BOOm!')
      this.head = node;
      this.length++;
    } else {
      //console.log('BOOM')
      let nextNode = this.head;
      this.head = node;
      //console.log(this.head);
      this.head.next = nextNode;
      //console.log(this.head);
      this.length++;
    }
  }

  insertAtPosition(data, position) {
    let node = new LinkListNode(data);
    let currentNode = this.head;
    let count = 0;
    let prevNode;

    if(position === 0) {
      let nextNode = this.head;
      this.head = node;
      this.head.next = nextNode;
    } else {

      while(count < position) {
        count++;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      prevNode.next = node;
      node.next = currentNode;
    }


  }

  searchWithTerm(term) {
    let currentNode = this.head;

    while(currentNode.next) {
      if(currentNode.data === term) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return [];
  }

  search(position) {
    let count = 0;
    let currentNode = this.head;

    if(this.length === 0 || position < 0 || position > this.length) {
      throw new Error('INVALID POSITION');
    }

    while(count < position) {
      count++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  delete(position) {
    if(position <= this.length && position >= 0) {
      let currentNode = this.head;
      let prevNode = this.head;
      let count = 0;

      if(position === 0) {
        this.head = currentNode.next
        return currentNode;
      }

      while(count < position) {
        count++;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      if(currentNode.next) {
        prevNode.next = currentNode.next;
        this.length--;
      } else {
        prevNode.next = null;
        this.length--;
      }
      return currentNode;
    }

  }

  // 1 => 2 => 3 => 4 => 5
  // 5 => 4 => 3 => 2 => 1

  //TODO: COME BACK AND FIX THIS LATER
  reverseLinkedList() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while(currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.head = prevNode;
  }
}

function compareTwoLinkedLists(head, head1) {
  if(head1 === null && head === null) {
    return true;
  }

  let isEqual = true;
  let n1 = head;
  let n2 = head1;

  while( n1 !== null && n2 !== null) {
    if(n1.data !== n2.data) {
      return false;
    }
    n1 = n1.next;
    n2 = n2.next;
  }

  if(n1 !== null || n2 !== null) {
    return  false;
  }

  return true;
}

function mergeTwoLinkedLists(headA, headB) {
  if(headA === null) {
    return headB;
  } else if(headB === null) {
    return headA;
  }

  let head = new LinkListNode();
  let p = head;

  while(headA !== null && headB !== null) {
    if(headA.data < headB.data) {
      p.next = headA;
      headA = headA.next;
    } else {
      p.next = headB;
      headB = headB.next;
    }
    p = p.next;
  }

  if(headA !== null) {
    p.next = headA;
  }

  if(headB !== null) {
    p.next = headB;
  }

  return head.next;
}

function getNodePositionFromTail(head, positionFromTail) {
  let valueArray = [];
  let currentNode = head;

  while(currentNode !== null) {
    valueArray.push(currentNode.data);
    currentNode = currentNode.next;
  }

  return valueArray[valueArray.length - positionFromTail - 1];
}

function deleteDuplicates(head) {
  let prevNode = head;
  let currentNode = head.next;

  while(currentNode !== null) {

    if(currentNode.data === prevNode.data) {
      prevNode.next = currentNode.next;
      currentNode = currentNode.next;
    } else {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  return head;
}

/*function detectCycle(head) {
 let visited = [];
 let currentNode = head;
 currentNode.visited = true;
 //visited[currentNode.data] = currentNode;

 if(currentNode === null) {
 return false;
 }

 if(currentNode.next === null) {
 return false;
 }

 while(currentNode.next !== null) {
 if(!currentNode.visited) {
 visited[currentNode] = true;
 currentNode = currentNode.next;
 } else {
 return true;
 }
 }

 return false;
 }*/

//TODO: Implement fast slow approach
function detectCycle(head) {
  let currentNode = head;
  let slow = head;
  let fast = headl
  if (currentNode === null) {
    return false;
  }

  while(fast.next !== null && slow !== null && fast !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) {
      return true;
    }
  }

  return false;

}

// Double link list

class DoubleLinkListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

function insertIntoDoublyLinkedList(head, data) {
  let currentNode = head;
  var node = new DoubleLinkListNode(data);
  if(head === null) {
    head = node;
    return head;
  }

  while(currentNode !== null) {
    if(data >= currentNode.data) {
      if(currentNode.next === null) {
        node.prev = currentNode;
        node.next = null;
        currentNode.next = node;
        return head;
      }
      if(data < currentNode.next.data) {
        let nextNode = currentNode.next;
        node.prev = currentNode;
        node.next = nextNode;
        nextNode.prev = node;
        currentNode.next = node;
        return head;
      }
      currentNode = currentNode.next;
    }

    if(data < currentNode.data) {
      node.next = currentNode;
      node.prev = null;
      currentNode.prev = node;
      return node;
    }
  }
}

//TODO: IMPLEMENT THIS LATER
function reverseDoubleLinkList(head) {

}

console.log('/////DOUBLE LINK LIST//////');

let head = null;
head = insertIntoDoublyLinkedList(head, 0);
head = insertIntoDoublyLinkedList(head, -1);
head = insertIntoDoublyLinkedList(head, 1);
head = insertIntoDoublyLinkedList(head, 7);
head = insertIntoDoublyLinkedList(head, 6);
head = insertIntoDoublyLinkedList(head, 4);
console.log(insertIntoDoublyLinkedList(head, 9));


//Create an instance of a singly list
let singly = new SinglyList();

singly.insert(0);
singly.insert(1);
singly.insert(2);
singly.insert(7);
//singly.insertAtHead('test0');
//singly.insertAtPosition('sub-text', 4);

let singly2 = new SinglyList();
singly2.insert(3);
singly2.insert(4);
singly2.insert(4)
singly2.insert(5);
singly2.insert(6);
singly2.insert(8);
singly2.insert(8);

//console.log(singly.length);

//console.log(singly.search(1));

//singly.delete(0);
//singly.reverseLinkedList();
console.log(singly.search(0));
console.log(singly.search(1));
console.log(singly.search(2));
//console.log(singly.search(3))
//console.log(singly.search(4))
//console.log(singly.length);

console.log('DELETING DUPLICATES');
console.log(deleteDuplicates(singly2.head));

console.log('COMPARING 2 LINKED LISTS');
console.log(compareTwoLinkedLists(singly.head, singly2.head));


//TODO: Create a double link list here
console.log('MERGING TWO LINKED LISTS');
let newList = mergeTwoLinkedLists(singly.head, singly2.head);
console.log(newList);

console.log('FINDING POSITION FROM TAIL');
console.log(getNodePositionFromTail(newList, 8));





//stair case algorithm
function stairCase(n) {
  let bastString = '';
  let counter = 0;

  for(let i =0; i < n; i++) {
    console.log( repeat( ' ', (n - i)) + repeat('#', i))
  }

}

function repeat(str, n) {
  let res = '';

  for(let i = 0; i <= n; i++) {
    res+=str;
  }

  return res;
}

stairCase(3);

//TODO: Implement a queue

//TODO: Implement a stack

//TODO: Implement a dictionary using a double link list


//TODO: implement a priority queue
//https://gist.github.com/nathanhumphrey/4549067

/*class PriorityQueue {
 construtor() {
 this.collection = [];
 }

 insert(x) {

 }
 }*/

