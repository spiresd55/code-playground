

function isAnAnagram(str1, str2) {
  let characterLookup = [];

  if(str1.length !== str2.length) {
    return false;
  }
  for(let i = 0; i < str1.length; i++) {
    let char1 = str1.charAt(i);
    let char2 = str2.charAt(i);

    if(characterLookup[char1] === undefined) {
      characterLookup[char1] = 1;
    } else {
      characterLookup[char1]+= 1;
    }

    if(characterLookup[char2] === undefined) {
      characterLookup[char2] = -1;
    } else {
      characterLookup[char2] -= 1;
    }
  }

  for(let k in characterLookup) {
    if(characterLookup[k] !== 0) {
      return false;
    }
  }

  return true;
}

console.log('IS AN ANAGRAM');
console.log(isAnAnagram('dcba', 'abcd'));

//SLIGHTLY MORE CHALLENGING :'(
function letterSwitchesNeededToBeAnagram(str1, str2) {
  let characterLookup = [];

  if(str1.length !== str2.length) {
    return -1;
  }

  for(let i = 0; i < str1.length; i++) {
    let char1 = str1.charAt(i);
    let char2 = str2.charAt(i);

    if(characterLookup[char1] === undefined) {
      characterLookup[char1] = {
        value: 1,
        isOriginal: true
      };
    } else {
      characterLookup[char1].value += 1;
    }

    if(characterLookup[char2] === undefined) {
      characterLookup[char2] = {
        value: -1,
        isOriginal: false
      };
    } else {
      characterLookup[char2] -= 1;
    }
  }

  let sum = 0;

  for(let k in characterLookup) {
    if(characterLookup[k].isOriginal === true) {
      sum += Math.abs(characterLookup[k].value);
    }
  }

  return sum;
}

console.log('LETTER SWITCHES TO BE AN ANAGRAM');
console.log(letterSwitchesNeededToBeAnagram('dddabbccc', 'aaaabzccz'));