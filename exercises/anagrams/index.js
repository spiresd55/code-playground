// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, '');
    stringB = stringB.replace(/[^\w]/g, '');

    let charMap = {};

    if(stringA.length !== stringB.length) {
        return false;
    }

    for(let i = 0; i < stringA.length; i++) {
        if(charMap[stringA[i]] === undefined){
            charMap[stringA[i]] = 1;
        } else {
            charMap[stringA[i]]++;
        }
    }

    for(let i = 0; i < stringB.length; i++) {
        if(charMap[stringB[i]] === undefined){
            return false;
        } else {
            charMap[stringB[i]]--;
        }
    }

    for(let val in charMap) {
        if(charMap[val] !== 0) {
            return false;
        }
    }

    return true;
}

function anagrams1(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if(aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for(let char of str.replace(/[^\w]/g, '').toLowerCase() ) {
        charMap[char] = charMap[char] + 1 || 1
    }

    return charMap;
}

function anagram2(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
