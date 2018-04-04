function reverseArray(a) {
    /*
     * Write your code here.
     */
    let arr = [];
    for(let i = 0; i < a.length; i++) {
        arr.unshift(a[i]);
    }

    return arr;
}