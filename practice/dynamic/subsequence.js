let sequence = [15, 27, 14, 38, 26, 55, 46, 65, 85, 20, 1];
let subsequences = [];


function compareNumberToSequence(subsequences) {

}

/*function findLargestSubsequence(arr) {
 for(let i =0; i < sequence.length; i++) {
 if(subsequences[0] === undefined) {
 subsequences[0] = sequence[0];
 }

 if() {

 }
 }
 }*/


function ceilIndex(A , l, r, key) {
  while (r - l > 1) {
    let m = l + (r - l)/2;
    if (A[m]>=key)
      r = m;
    else
      l = m;
  }

  return r;
}

function longestIncreasingSubsequenceLength(A, size) {
  // Add boundary case, when array size is one

  let tailTable   = [];
  let len; // always points empty slot

  tailTable[0] = A[0];
  len = 1;
  for (let i = 1; i < size; i++)
  {
    if (A[i] < tailTable[0])
    // new smallest value
      tailTable[0] = A[i];

    else if (A[i] > tailTable[len-1])
    // A[i] wants to extend largest subsequence
      tailTable[len++] = A[i];

    else
    // A[i] wants to be current end candidate of an existing
    // subsequence. It will replace ceil value in tailTable
      tailTable[ceilIndex(tailTable, -1, len-1, A[i])] = A[i];
  }

  console.log(tailTable)

  return len;
}

console.log(longestIncreasingSubsequenceLength(sequence, sequence.length));


//FInd largest decreasing subsequence

function ceilIndexDecreasing(A , l, r, key) {
  while (r - l > 1) {
    let m = l + (r - l)/2;
    if (A[m]<=key)
      r = m;
    else
      l = m;
  }

  return r;
}

function longestDecreasingSubsequenceLength(A, size) {
  // Add boundary case, when array size is one

  let tailTable   = [];
  let len; // always points empty slot

  tailTable[0] = A[0];
  len = 1;
  for (let i = 1; i < size; i++)
  {
    if (A[i] > tailTable[0] )
    // new greastest value
      tailTable[0] = A[i];

    else if (A[i] < tailTable[len-1])
    // A[i] wants to extend largest subsequence
      tailTable[len++] = A[i];

    else
    // A[i] wants to be current end candidate of an existing
    // subsequence. It will replace ceil value in tailTable
      tailTable[ceilIndexDecreasing(tailTable, -1, len-1, A[i])] = A[i];
  }

  console.log(tailTable);

  return len;
}

console.log(longestDecreasingSubsequenceLength(sequence, sequence.length));
