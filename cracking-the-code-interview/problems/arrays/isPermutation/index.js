function isPermutation(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    const sortedStr1 = str1.split('').sort().join();
    const sortedStr2 = str2.split('').sort().join();

    return sortedStr1 === sortedStr2;
}

console.log(isPermutation('abc', 'bac'));
console.log(isPermutation('ddc', 'bbc'));


function isPermutation2(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    const charDic = {};

    for(let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if(!charDic[char]) {
            charDic[char] = 1;
        } else {
            charDic[char]+=1;
        }
    }

    for(let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if(!charDic[char]) {
            return false;
        }
        charDic[char]-=1;
    }

    const keys = Object.keys(charDic);
    return keys.every(key => charDic[key] === 0);
}

console.log(isPermutation2('abc', 'bac'));
console.log(isPermutation2('ddc', 'bbc'))