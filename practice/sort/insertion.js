
function insertionSort(num, arr) {
  arr.push(num);
  for(let i = 0; i < arr.length; i++) {
    let j = i;
    while(j > 0 && arr[j-1] > arr[j]) {
      let prev = arr[j-1];
      let current = arr[j];

      arr[j] = prev;
      arr[j-1] = current;

      j--;
    }
  }
}

console.log('INSERTION SORT');
let insertedArr = [-1, 45, 16];
insertionSort(5, insertedArr);
insertionSort(4, insertedArr);
insertionSort(3, insertedArr);
insertionSort(2, insertedArr);
insertionSort(1, insertedArr);
console.log(insertedArr);