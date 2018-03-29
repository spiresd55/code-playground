// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels2(str) {
    let vowelMap = {a: 0, e: 0, i: 0, o: 0, u: 0};
    let vowelCount = 0;

    str = str.toLowerCase();

    for(let i = 0; i < str.length; i++) {
        if(vowelMap[str[i]] !== undefined) {
            vowelCount++;
        }
    }

    return vowelCount;
}

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

function vowels3(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for(let char of str.toLowerCase()) {
        if(vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

module.exports = vowels;
