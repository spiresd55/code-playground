//With array
const isUnique = (str) => {
    const charDict = {};

    for(let i = 0; i < str.length; i++) {
        if(charDict[str[i].toLowerCase()]) {
            return false;
        }
        charDict[str[i].toLowerCase()] = true;
    }
    return true;
}

//Without additional datastructure
const isUnique2 = (str) => {
    for(let i = 0; i < str.length; i++) { 
        const charOfString = str[i].toLowerCase();
        if(i === str.length - 1) {
            return true;
        } else if(str.substring(i + 1).toLowerCase().indexOf(charOfString) !== -1) {
            return false;    
        }
    }    
}

console.log(isUnique('test'));
console.log(isUnique('abc'));

console.log(isUnique2('test'));
console.log(isUnique2('abc'));
