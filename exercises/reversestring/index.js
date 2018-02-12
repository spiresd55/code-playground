// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');
}

module.exports = reverse;



//function reverse(str) {
//    return str.split('').reverse().join('');
//}

// function reverse(str) {
//     let val = '';
//     for(let i = 0 ; i <= str.length; i++) {
//         val += str.charAt(str.length - i);
//     }
//     return val;
// }

// function reverse(str) {
//     let val = '';
//     for(let character of str) {
//         val = character + val;
//     }
//     return val;
// }

