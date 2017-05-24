let palindromeTest1 = 'ana';
let palindromeTest2 = 'moom';
let palindromeTest3 = 'iv';
let palindromeTest4 = 'a';
let palindromeTest5 = 'b b';

function isAPalindrome(str) {
  let middle = Math.floor(str.length / 2);
  let isEven = str.length % 2 === 0;

  if(str.length === 1) {
    return true;
  }

  if(!isEven) {
    middle--;
  }

  for(let i = 0; i <= middle; i++) {
    if( str.charAt(i) === str.charAt(str.length - i)) {
      return false;
    }
  }

  return true;
}

console.log('SOLVING IS PALINDROME');
console.log(isAPalindrome(palindromeTest3));