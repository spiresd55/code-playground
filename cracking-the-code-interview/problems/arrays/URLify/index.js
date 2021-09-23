//Easy way
function urlify(str) {
    let words = str.split(' ');
    return words.join('%20');
}

var urlify3 = function(str) {
    //Return empty if no string is provided
    if(!str) return "";

    let chars = str.split('');
    let spaceCount = 0;
    let index = 0;

    // Need to determine the final size
    for(let i = 0; i < chars.length; i++) {
        if(chars[i] === " ") spaceCount++;
    }

    // Multiplying the space count by 2 will consider all string replacements
    index = str.length + spaceCount * 2 - 1;

    //Index will always be just the right amount of chars ahead due to logic above
    for(let i = chars.length - 1; i >= 0; i--) {
        if(chars[i] === ' ') {
            chars[index] = '0';
            chars[index -1] = '2';
            chars[index -2] = '%';
            index-=3;
        } else {
            chars[index] = chars[i];
            index--;      
        }
    }

    return chars.join('');
};

console.log(urlify3('here is a test'));
//console.log(urlifyInPlace('here is a test'));