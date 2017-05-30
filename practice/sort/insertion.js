
function insertionSort(num, arr) {
  arr.push(num);
  for(let i = 1; i < arr.length; i++) {
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
insertedArr = [-1, 45, 16];
insertionSort(5, insertedArr);
insertionSort(4, insertedArr);
insertionSort(3, insertedArr);
insertionSort(2, insertedArr);
insertionSort(1, insertedArr);
console.log(insertedArr);

function insertionSort2(arr, n) {
  for(let i =0; i < n; i++) {
    let j = i;
    while(j > 0 && arr[j - 1] > arr[j] ) {
      let prev = arr[j-1];
      let current = arr[j];

      arr[j] = prev;
      arr[j-1] = current;

      j--;
    }
  }

  return arr;
}

console.log(insertionSort2(unsArr, 10));


function countingSort(arr, n) {
  if(n < 2) {
    return arr;
  }
  //FIND MIN AND MAX VALUES OF ARRAY
  let min = arr[0];
  let max = arr[0];

  for(let i =0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
  }

  let indexArray = [];
  //Create Index Array
  for(let i = min; i <= max; i++) {
    indexArray[i] = 0;
  }

  //Count
  for(let i =0; i < n; i++) {
    indexArray[arr[i]]++;
  }

  //Count the index array
  for(let i = min; i<= max; i++) {
    if(i !== min) {
      indexArray[i] = indexArray[i] + indexArray[i-1]
    }
  }

  let sortedArray = [];

  //Sort the array
  for(let i = 0; i < n; i++) {
    sortedArray[indexArray[arr[i]] - 1] = arr[i];
    indexArray[arr[i]] -= 1;
  }

  return sortedArray;
}

console.log('COUNTING SORT');
countArray = [1, 12, 14, 8, 7, 9, 6, 3, 10, 10, 10, 10, 10];

console.log(countingSort(countArray, countArray.length));