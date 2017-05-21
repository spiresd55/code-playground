// TODO: Find the running median as new numbers are added

function isGreaterComparator(a, b) {
  return a > b;
}

function isLesserComparator(a, b) {
  return a < b;
}

console.log('PRIORITY QUEUES');
let greaterQueue = new PriorityQueue(isGreaterComparator);
let lesserQueue = new PriorityQueue(isLesserComparator);

/*greaterQueue.insert(1);
 greaterQueue.insert(4);
 greaterQueue.insert(5);
 greaterQueue.insert(60);
 greaterQueue.insert(0);
 greaterQueue.insert(10);

 console.log(greaterQueue);
 console.log(greaterQueue.dequeue());
 console.log(greaterQueue.dequeue());
 console.log(greaterQueue.dequeue());
 console.log(greaterQueue.dequeue());
 console.log(greaterQueue.dequeue());
 console.log(greaterQueue.dequeue());

 lesserQueue.insert(1);
 lesserQueue.insert(4);
 lesserQueue.insert(5);
 lesserQueue.insert(60);
 lesserQueue.insert(0);
 lesserQueue.insert(10);

 console.log(lesserQueue);
 console.log(lesserQueue.dequeue());
 console.log(lesserQueue.dequeue());
 console.log(lesserQueue.dequeue());
 console.log(lesserQueue.dequeue());
 console.log(lesserQueue.dequeue());
 console.log(lesserQueue.dequeue());*/

function findRunningMedium(input) {
  addNumber(input, greaterQueue, lesserQueue);
  rebalance(greaterQueue, lesserQueue);
  return getMedian(input, greaterQueue, lesserQueue);
}

function rebalance(greaterQueue, lesserQueue) {
  let lowerHeapSize = lesserQueue.size() < greaterQueue.size() ? lesserQueue : greaterQueue;
  let higherHeapSize = lesserQueue.size() > greaterQueue.size() ? lesserQueue: greaterQueue;

  if(higherHeapSize.size() - lowerHeapSize.size() >= 2) {
    lowerHeapSize.insert(higherHeapSize.dequeue());
  }
}

function getMedian(input, greaterQueue, lesserQueue) {
  if(greaterQueue.size() === lesserQueue.size() ) {
    return (greaterQueue.peek() + lesserQueue.peek()) / 2
  } else {
    return input;
  }
}

function addNumber(input, greaterQueue, lesserQueue) {
  if(lesserQueue.size() === 0 || input < lesserQueue.peek()) {
    lesserQueue.insert(input);
  } else {
    greaterQueue.insert(input);
  }
}
