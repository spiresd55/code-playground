console.log('Problem 1 reversing the array order');

let testDataArray = [1, 2, 3, 4, 5, 6 ];

// 2 1 3 4 5 6
// 6 2 3 4 5 1
// 6 5 3 4 2 1


function reverseArray(arr) {

  let output = '';
  for(let i = (arr.length - 1) ; i >= 0; i--) {
    output += arr[i] + ' ';
  }
  console.log(output);
}


reverseArray(testDataArray);


function reverseArrayStructure(arr) {
  let mid = Math.ceil(arr.length / 2);

  for(let i =0; i < mid; i++) {
    let left = arr[i];
    let right = arr[arr.length - i - 1];

    arr[i] = right;
    arr[arr.length - i - 1] = left;
  }
}

console.log('REVERSING ARRAY STRUCTURE');
reverseArrayStructure(testDataArray);
console.log(testDataArray);