let lonInt = [0,0,1,1,2,2,3,3,4,4,5,5,6,7,7, 10, 10];
//4 9 95 93 57 4 57 93 9
let lonInt2 = [4, 9, 95, 93, 57, 4, 57, 93, 9];

function findLonelyInteger(arr) {
  let numLookup = {};

  for(let i = 0; i < arr.length; i++) {
    if(numLookup[arr[i]] === undefined) {
      numLookup[arr[i]] = 1;
    } else {
      numLookup[arr[i]] += 1;
    }
  }

  for(let k in numLookup) {
    if(numLookup[k] !== 2) {
      return k;
    }
  }

}

function findLonelyInteger2(arr) {
  let numLookup = {};

  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]^ 0);
    if(numLookup[arr[i]] === undefined) {
      numLookup[arr[i]] = arr[i] ^ 1;
    } else {
      numLookup[arr[i]] = arr[i] ^ arr[i];
    }
  }

  for(let k in numLookup) {
    if(numLookup[k] !== 0) {
      return k;
    }
  }
}

console.log('FINDING THE LONELY INTEGER');
//console.log(findLonelyInteger(lonInt));
//console.log(findLonelyInteger(lonInt2));
console.log(findLonelyInteger2(lonInt));

function maximizingXOR(lowerRange, higherRange) {
  let max = 0;

  for(let i =lowerRange; i <= higherRange; i++) {
    for(let j =lowerRange; j < higherRange; j++) {
      max = Math.max(max, i ^ j);
    }
  }

  return max;
}

console.log('FINDING THE MAXIMUM XOR VALHE');
console.log(maximizingXOR(10, 15));

