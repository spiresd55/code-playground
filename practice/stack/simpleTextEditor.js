console.log(validateBracket(test1));
console.log(validateBracket(test2));
console.log(validateBracket(test3));

let initialText = '';
let textStack = [];

//1 Apend string W to the end of the initial text
//2 delete the last character of s
//3 prinkt the nth charcter of text
//4 undo the last 1 or 2 operation
function simpleTextEditor(input) {
  let operations = inputs[i].split(' ');
  //console.log(operations);
  if( operations[0] == 1) {
    textStack.push(initialText);
    initialText = initialText.concat(operations[1]);
  } else if( operations[0] == 2) {
    textStack.push(initialText);
    initialText = initialText.substring(0, initialText.length - operations[1]);
    //  initialText = initialText.slice(operations[1] * -1);
  } else if( operations[0] == 3) {
    console.log(initialText.charAt(operations[1] -1));
  } else if( operations[0] == 4) {
    initialText = textStack.pop();
  }
  //}
}

console.log('/////////////Simple Text Editor');
simpleTextEditor('1 abc');
simpleTextEditor('3 2');
simpleTextEditor('2');
simpleTextEditor('3 2');
simpleTextEditor('4');
simpleTextEditor('4');
simpleTextEditor('3 2');

