let sumArray = [1, 4, 2, 3, 6, 0, 5];


function find2SumPairs(arr, sum) {
  let numLookup = {};

  for(let i =0; i < arr.length; i++) {
    numLookup[arr[i]] = {
      visited: false
    };
  }

  let pairs = [];
  //let numSet = new Set();

  for(let i =0; i < arr.length; i++) {
    console.log(numLookup[sum-arr[i]]);
    if(numLookup[sum-arr[i]] !== undefined && numLookup[sum-arr[i]].visited == false) {
      numLookup[sum-arr[i]].visited = true;
      numLookup[arr[i]].visited = true;
      pairs.push([sum-arr[i], arr[i]]);
      //numSet.add([sum-arr[i], arr[i]])
    }
  }
  console.log('HERE IS THE NUM SET');
  //console.log(numSet);

  return pairs;
}

function find3SumPairs(arr, sum) {

}

console.log('FIND 2 SUM');
console.log(find2SumPairs(sumArray, 5));