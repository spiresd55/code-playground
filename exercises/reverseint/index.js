// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt2(n) {
    let numberToString = n.toString();
    if (numberToString[0] === '-') {
        numberToString = numberToString.substring(1).split('').reverse().join('');
        numberToString = `-${numberToString}`;
        return parseInt(numberToString);
    } else {
        numberToString = numberToString.split('').reverse().join('');
        return parseInt(numberToString);
    }
}

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
