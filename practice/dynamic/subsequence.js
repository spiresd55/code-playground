let sequence = [15, 27, 14, 38, 26, 55, 46, 65, 85, 20, 1];
let subsequences = [];


function compareNumberToSequence(subsequences) {

}

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

  return len;
}

console.log('PREV RESULT');
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

//console.log(longestDecreasingSubsequenceLength(sequence, sequence.length));


function personalAttemptLongestSubsequence(arr, n) {
  let LIS = [];
  LIS[0] = 1;
  let max = 0;
  //for(let i = 0; i < n; i ++) {
  //  LIS[i] = 1;
  //}

  for(let i = 1; i < n; i++) {
    LIS[i] = 1;
    for(let j = 0; j < i; j++) {
      if(arr[i] > arr[j] && LIS[i] < LIS[j] + 1) {
        LIS[i] = LIS[j] + 1;
      }
    }
    max = Math.max(max, LIS[i]);
  }

 // for(let i = 0; i < LIS.length; i++) {
  //  max = Math.max(max, LIS[i]);
 // }

  return max;
}

console.log('PERSONAL ATTEMPT');
console.log(personalAttemptLongestSubsequence(sequence, sequence.length));

function personalAttemptLongestDecreasingSubsequence(arr, n) {
  let LDS = [];

  for(let i = 0; i < n; i++) {
    LDS[i] = 1;
  }

  for(let i = 1; i < arr.length; i++) {
    for(let j = 0; j < i; j++) {
      if(arr[i] < arr[j] && LDS[i] < LDS[j] + 1) {
        LDS[i] = LDS[j] + 1;
      }
    }
  }

  let max = 0;
  for(let i = 0; i < LDS.length; i++) {
    max = Math.max(max, LDS[i])
  }

  return max;
}

console.log('DECREASING SEQUECNE');
console.log(personalAttemptLongestDecreasingSubsequence(sequence, sequence.length));

function isPalindrome(str) {
  let middle = Math.ceil(str.length / 2);
  let isEven = str.length % 2 === 0;

  if(str.length === 1) {
    return true;
  }

  if(str.length === 2) {
    return str.charAt(0) === str.charAt(1);
  }

  if(!isEven) {
    middle--;
  }

  for(let i = 0; i <= middle; i++) {
    if( str.charAt(i) !== str.charAt(str.length - i - 1)) {
      return false;
    }
  }

  return true;
}

function findLongestPalindromeSubsequence(str, n) {
  let LPS = [];
  LPS[0] = str.charAt(0);
  let max = '';


  for(let i = 1; i < n; i++) {
    LPS[i] = str.charAt(i);
    for(let j =0; j < i; j++) {
      let concatStr = str.charAt(j).concat(str.substring(i));
      if( isPalindrome(concatStr) && concatStr.length > LPS[j].length) {
        LPS[j] = concatStr;
      }
    }
    if(max.length < LPS[i-1].length ) {
      max = LPS[i];
    }
  }
  
  for(let i = 0; i < LPS.length; i++) {
    if(max.length < LPS[i].length ) {
      max = LPS[i];
    }
  }

  return max;
}

console.log('LONGEST RUNNING PALINDROME');
console.log(findLongestPalindromeSubsequence('banana', 6));
console.log(findLongestPalindromeSubsequence('abaaaa', 6));
console.log(findLongestPalindromeSubsequence('abaaaabbbbbbbbbcccccccccccdddddddddddddddd', 42));


//TODO: IMPLEMENT THE nLOGn solutions