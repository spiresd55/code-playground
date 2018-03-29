// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize2(str) {
    let finalString = '';
    str.split(' ').forEach((word, index) => {
        finalString += (word.substring(0, 1).toUpperCase() + word.substring(1)) + ' ';
    });
    return finalString.substring(0, finalString.length - 1);
}

function capitalize(str) {
    const words = [];

    for( let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1) + ' ');
    }

    return words.join('').substring(0, str.length);
}
module.exports = capitalize;
