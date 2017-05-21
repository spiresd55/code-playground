console.log('VALIDATE BRACKETS');

let test1 = '[({})]';
let test2 = '][';
let test3 = '{[(]})';

function validateBracket(text) {
  let characterStack = [];
  for(let i =0; i < text.length; i++ ) {
    let char = text.charAt(i);

    if(char === '[' || char === '(' || char === '{') {
      characterStack.push(char);
    }

    if(char === ']') {
      let res = characterStack.pop();
      if(res !== '[') {
        return false;
      }
    }

    if(char === '}') {
      let res = characterStack.pop();
      if(res !== '{') {
        return false;
      }
    }

    if(char === ')') {
      let res = characterStack.pop();
      if(res !== '(') {
        return false;
      }
    }
  }
  return true;
}

console.log(validateBracket(test1));
console.log(validateBracket(test2));
console.log(validateBracket(test3));