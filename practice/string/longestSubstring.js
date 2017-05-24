//lengthOfLongestSubstring
//retrieve longest substring without repeating characters
let substringTest = 'abcddabcdefghijklmnop';

function retriveLengthOfLongestSubstring(str) {
  let characterMap = [];
  let indexOfLastUnqCharacter = 0;
  let lengthOfLongestSubStr = 0;

  for(let i = 0; i < str.length; i++) {
    if(characterMap[str.charAt(i)] === undefined ) {
      characterMap[str.charAt(i)] = true;
    } else {
      lengthOfLongestSubStr   = i - indexOfLastUnqCharacter;
      indexOfLastUnqCharacter = i;
      characterMap = [];
    }
  }

  let lastCheck = str.length - indexOfLastUnqCharacter;

  return Math.max(lengthOfLongestSubStr, lastCheck);
}

//abc
//preffix: a suffix bc
//abf
//adg



console.log('LONGEST SUBSTRING');
console.log(retriveLengthOfLongestSubstring(substringTest));