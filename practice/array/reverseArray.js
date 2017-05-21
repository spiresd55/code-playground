console.log('Problem 1 reversing the array order');

let testDataArray = [1, 2, 3, 4, 5, 6 ];

function reverseArray(arr) {

  let output = '';
  for(let i = (arr.length - 1) ; i >= 0; i--) {
    output += arr[i] + ' ';
  }
  console.log(output);
}


reverseArray(testDataArray);