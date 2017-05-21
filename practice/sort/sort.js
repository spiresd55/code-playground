//TODO: Implement sorting algorithims here
console.log('SORTING ALGORITHIMS');



//TODO: Try to solve convex hull problem here (105)


let numbers = [11, 1, 19, 299, 399, 2, 0, 900, 43, 3];

function findAndRemoveMin(collection) {
  let min, index;
  for(let i =0; i < collection.length; i++) {
    if(i === 0) {
      min = collection[i];
      index = 0;
    } else {
      if(collection[i] < min) {
        min = collection[i];
        index = i;
      }
    }
  }

  collection.splice(index, 1);
  return min;
}

function selectionSort(collection) {
  let sortedList = [];

  while(collection.length !== 0) {
    let result = findAndRemoveMin(collection);
    sortedList.push(result);
    //collection = result[1];
  }

  return sortedList;
}
console.log('SELECTION SORT');
console.log(selectionSort(numbers));


//TODO: Implement a MIN and MAX HEAP Structure  (124)
//DOCUMENTATION FOUND HERE: http://eloquentjavascript.net/1st_edition/appendix2.html









//Write mergesort here
console.log('MERGE SORTING');
let collection = [1, 100, 1001, 24, 27, 18, 100000, 9, -3];
function mergeSort(arr) {
  if(arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  console.log(left);
  console.log(right);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result  = [],
      il      = 0,
      ir      = 0;

  while (il < left.length || ir < right.length){
    if (left[il] < right[ir]){
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }

  return result.concat(left.slice(il)).concat(right.slice(ir));
}

//mergeSort(collection);

function binarySearch(arr, data) {
  let middle = Math.floor(arr.length / 2);

  if(arr.length === 1) {
    return -1;
  }else if(arr[middle] === data) {
    return middle;
  } else if(data > arr[middle]) {
    return binarySearch(arr.slice(middle), data);
  } else if(data < arr[middle]) {
    return binarySearch(arr.slice(0, middle), data);
  }
}

console.log('******* BINARY SEARCH *********');
collection.sort((a, b) => {
  return a - b;
});

console.log(binarySearch(collection, 45));


console.log('******* COUNTING SORT **********');












function countSort(input) {
  let counts = [];
  for(let i = 0; i < input.length; i++) {

    if (counts[input[i]]) {

    }
  }
}




