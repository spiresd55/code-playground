
/**
 1 1 1 0 0 0
 0 1 0 0 0 0
 1 1 1 0 0 0
 0 0 2 4 4 0
 0 0 0 2 0 0
 0 0 1 2 4 0
 */

console.log('Calculate the sum of hourglass and find the maximum');


let array2d = [];
array2d[0] = [1, 1, 1, 0, 0, 0];
array2d[1] = [0, 1, 0, 0, 0, 0];
array2d[2] = [1, 1, 1, 0, 0, 0];
array2d[3] = [0, 0, 2, 4, 4, 0];
array2d[4] = [0, 0, 0, 2, 0, 0];
array2d[5] = [0, 0, 1, 2, 4, 0];



function calculate2DHourglassMaximum(arr) {
  let maxSum;
  for(let i =0; i < 4; i++) {
    for(let j =0; j < 4; j++) {
      let sum = arr[i][j] + arr[i][j + 1] + arr[i][j +2] +
        arr[ i + 1][j + 1] +
        arr[i + 2][j] + arr[i+ 2][j +1] + arr[i + 2][j +2];

      //console.log(sum);
      if(maxSum === undefined) {
        maxSum = sum;
      }
      if(sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  return maxSum
}

