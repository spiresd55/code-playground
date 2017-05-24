let test1 ='We promptly judged antique ivory buckles for the next prize';

function isLetter(char) {
  return char.length === 1 && char.match(/[a-zA-z]/g) !== null && char !== ' ';
}

function isPangram(str) {
  let letterMap = [];
  let counter = 0;

  for(let i =0; i < str.length; i++) {
    let char = str.charAt(i);

    if(isLetter(char)) {
      if(letterMap[char] === undefined) {
        letterMap[char] = true;
        counter++;
        if(counter === 26) {
          return true;
        }
      }
    }
  }

  return false;
}

console.log('SOLVING PANGRAM');
console.log(isPangram(test1));