class Heap {
  constructor() {
    this.heap = [];
  }

  insert(data) {
    this.heap.push(data);
    this.bubbleUp(this.heap.length - 1, data);
    //this.heapify(0);
  }

  maxHeapify(arr, index) {
    let left = this.getLeftIndex(arr, index);
    let right = this.getRightIndex(arr, index);
    let largest = null;

    if (left !== null && arr[left] > arr[index]) {
      largest = left;
    } else {
      largest = index;
    }

    if (right !== null && arr[right] > arr[largest]) {
      largest = right;
    }

    if(largest !== index) {
      let least = arr[index];
      let most = arr[largest];
      arr[index] = most;
      arr[largest] = least;
      this.maxHeapify(arr, largest)
    }
  }

  minHeapify(arr, index) {
    let left = this.getLeftIndex(arr, index);
    let right = this.getRightIndex(arr, index);
    let smallest = null;

    if (left !== null && arr[left] < arr[index]) {
      smallest = left;
    } else {
      smallest = index;
    }

    if (right !== null && arr[right] < arr[smallest]) {
      smallest = right;
    }

    if(smallest !== index) {
      let most = arr[index];
      let least = arr[smallest];
      arr[index] = least;
      arr[smallest] = most;
      this.minHeapify(arr, smallest)
    }
  }

  buildMaxHeap(arr) {
    for(let i = Math.ceil(arr.length/2); i >= 0; i-- ) {
      this.maxHeapify(arr, i);
    }
    this.heap = arr;
    return arr;
  }

  buildMinHeap(arr) {
    for(let i = Math.ceil(arr.length/2); i >= 0; i-- ) {
      this.minHeapify(arr, i);
    }
    this.heap = arr;
    return arr;
  }

  bubbleUp(childIndex, childData) {
    if(childIndex > 0) {
      var parentIndex = this.getParentIndex(childIndex);
      var parentData = this.heap[parentIndex];

      if(childData > parentData) {
        this.heap[childIndex] = parentData;
        this.heap[parentIndex] = childData;
        this.bubbleUp(parentIndex, childData);
      }
    }
  }

  bubbleDown() {

  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex -1 /2));
  }

  getLeftIndex(arr, parentIndex) {
    let index = parentIndex * 2;

    if(index <= arr.length - 1) {
      return index;
    } else {
      return null;
    }
  }

  getRightIndex(arr, parentIndex) {
    let index = (parentIndex * 2) + 1;

    if(index <= arr.length - 1) {
      return index;
    } else {
      return null;
    }
  }

  getMax() {
    return this.heap[0];
  }

  extractMax() {
    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.maxHeapify(this.heap, 0);
    return max;
  }

  extractMin() {
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.minHeapify(this.heap, 0);
    return min;
  }

}