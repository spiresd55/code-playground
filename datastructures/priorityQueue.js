
class PriorityQueue {
  constructor(comparator) {
    this.comparator = comparator;
    this.queue = [];
  }

  peek() {
    return this.queue[0];
  }

  insert(data) {
    this.queue.push(data);
    this.bubbleUp(this.queue.length - 1, data);
    //this.heapify(0);
  }

  bubbleUp(childIndex, childData) {
    if(childIndex > 0) {
      var parentIndex = this.getParentIndex(childIndex);
      var parentData = this.queue[parentIndex];

      if(this.comparator(childData, parentData)) {
        //if(childData > parentData) {
        this.queue[childIndex] = parentData;
        this.queue[parentIndex] = childData;
        this.bubbleUp(parentIndex, childData);
      }
    }
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1 /2));
  }

  dequeue() {
    let data = this.queue[0];
    this.queue[0] = this.queue.pop();
    this.heapify(0);
    return data;
  }

  size() {
    return this.queue.length;
  }

  heapify(index) {
    let left = this.getLeftIndex(index);
    let right = this.getRightIndex(index);
    let largest = null;

    if (left !== null && this.comparator(this.queue[left],  this.queue[index])) {
      largest = left;
    } else {
      largest = index;
    }

    if (right !== null && this.comparator(this.queue[right], this.queue[largest])) {
      largest = right;
    }

    if(largest !== index) {
      let least = this.queue[index];
      let most = this.queue[largest];
      this.queue[index] = most;
      this.queue[largest] = least;
      this.heapify(largest);
    }
  }

  getLeftIndex(parentIndex) {
    let index = parentIndex * 2;

    if(index <= this.queue.length - 1) {
      return index;
    } else {
      return null;
    }
  }

  getRightIndex(parentIndex) {
    let index = (parentIndex * 2) + 1;

    if(index <= this.queue.length - 1) {
      return index;
    } else {
      return null;
    }
  }
}
