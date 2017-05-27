//Write a function to find the longest common prefix string amongst an array of strings.

function longestCommonPrefix(strCollection) {
  let sortedCollection = strCollection.sort();

  let first = sortedCollection[0];
  let last = sortedCollection[sortedCollection.length - 1];

  let counter = 0;
  for(let i = 0; i < Math.min(first.length, last.length); i++) {
    if(first.charAt(i) === last.charAt(i)) {
      counter++;
    } else {
      break;
    }
  }
  return counter;
}

console.log('Longest common prefix');
console.log(longestCommonPrefix(['aaabc', 'aaabac', 'aab', 'aaaaa']));
