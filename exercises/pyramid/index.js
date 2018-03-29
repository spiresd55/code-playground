// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const arr = Array(n + (n - 1)).fill(' ');

    for(let i = 0; i < n; i++) {
        let middle = Math.floor(arr.length / 2);
        if(i === 0) {
            arr[middle] = '#'
        } else {
            arr[middle + i] = '#';
            arr[middle - i] = '#';
        }
        console.log(arr.join(''));
    }
}

module.exports = pyramid;
