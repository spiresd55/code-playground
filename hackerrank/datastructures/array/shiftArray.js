function shiftArrayLeft(arr, rotations) {
   for(let i =0; i < rotations.length; i++) {
       for(let j = 0; j < rotations[i]; j++) {
           arr.push(arr.shift());
       }
   }

   return arr;
}

//arr1.push.apply(arr1, arr1.splice(0,2));
function shiftArrayLeft2(arr, rotations) {
    for(let i =0; i < rotations.length; i++) {
        arr.push.apply(arr , arr.splice(0, rotations[i]));
    }

    return arr;
}

function shiftArrayRight(arr, rotations) {
    for(let i =0; i < rotations.length; i++) {
        arr.unshift.apply(arr, arr.splice(arr.length - rotations[i], rotations[i]));
    }

    return arr;
}

console.log(shiftArrayLeft([1, 3, 5, 6, 7], [3, 1]));
console.log(shiftArrayLeft2([1, 3, 5, 6, 7], [3, 1]));
console.log(shiftArrayRight([1, 3, 5, 6, 7], [3, 1]));