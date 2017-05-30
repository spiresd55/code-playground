let maxProductArray = [0, 10 , 8, -1, -10, -20];

function findMaxProductArray(arr) {
  if(arr.length === 1) {
    return arr;
  }

  let maxArrVal = 1;
  let minArrVal = 1;
  let maxSoFar = 1;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      maxArrVal = Math.max(maxArrVal * arr[i]); //10 80
      minArrVal = Math.min(1, minArrVal * arr[i]) // 1 1
    } else if(arr[i] === 0) {
      minArrVal = 1;
      maxArrVal = 1;
    } else {
      let temp = maxArrVal; //80 80
      maxArrVal = Math.max(minArrVal * arr[i], 1); //1 800
      minArrVal = Math.min(temp * arr[i]); // -80 -800
    }

    if(maxSoFar < maxArrVal) {
      maxSoFar = maxArrVal; //10 80 800
    }

  }

  return maxSoFar;
}

function findMaxProductArrayDynamic(arr) {
  let min = [];
  let max = [];

  min[0] = arr[0];
  max[0] = arr[0];
  let result = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > 0) {
      max[i] = Math.max(arr[i], arr[i] * max[i-1]);
      min[i] = Math.min(arr[i], arr[i] * max[i-1]);
    } else {
      max[i] = Math.max(arr[i], arr[i] * min[i-1]);
      min[i] = Math.min(arr[i], arr[i] * max[i-1]);
    }

    result = Math.max(result, max[i]);
  }

  return result;
}

console.log('FIND THE MAX PRODUCT RESULT');
console.log(findMaxProductArray(maxProductArray));
console.log(findMaxProductArrayDynamic(maxProductArray));