//TODO: Remove duplicates from the array without extra spaces
console.log('SAMPLE SECTION')
let testData = [1, 5, 6, 7, 7, 7, 0 , 2, 2, 3, 5, 5, 5, 9, 9, 10, 1];
let testData2 = [100, -1, 88, 54, 67, 9, 18, 37, 4];

function removeDuplicates(arr) {
  let hashSet = [];
  let sortedArray = arr.sort((a, b) => {
      return a - b;
});

  for(let i = sortedArray.length - 1; i > 0; i--) {
    if(hashSet[sortedArray[i]] === undefined) {
      hashSet[sortedArray[i]] = '';
    } else {
      sortedArray.splice(i, 1);
    }
  }

  return sortedArray;
}

console.log('REMOVING DUPLICATE RESULTS')
console.log(removeDuplicates(testData));

//TODO: Merge two unsorted array into a single sorted array.

function mergeUnsortedArrays(arr, arr2) {
  let concatArr = arr.concat(arr2)

  return concatArr.sort((a, b) => {
      return a - b;
})
}

console.log('MERGE UNSORTED ARRAYS')
console.log(mergeUnsortedArrays(testData, testData2));

//TODO: Implement merge sort into linked list


//TODO: Find the largest increasing sub sequence in an array

/*findLargestSubSequence(arr) {
 let canidateSeq = [];
 let promisingSeq = [];

 arr.forEach((num, index) => {
 if(index === 0) {
 canidateSeq.push(num);
 }


 });

 }*/

//https://modernpathshala.com/Learn/data-structure/Assessment

