/****************************************
 * Is balanced
 ***************************************/
let exps = ['<>>>', '<>>>>', '<<<', '<<<>>>', '>>>1234<<<']; // >><<
let maxR = [2, 2, 1, 1, 6];
function BalancedOrNot(expressions, maxReplacements) {
    let results = [];
    let charMap = {'<' : 0, '>' : 1}; //0 is open char, 1 is closing char

    for (let i = 0; i < expressions.length; i++) {
        let expression = expressions[i]; //Current Expression
        let maxReplacementSwaps = maxReplacements[i]; //Max Replacement Number
        let charStack = []; //Stack to keep track of balanced chars
        let neededReplacements = 0; //If a closing occurs without an opening
        for(let j = 0; j < expression.length; j++) {
            let ch = expression[j];
            if(charMap[ch] === 0) {
                charStack.push(ch); //Push onto stack if opening
            } else if(charMap[ch] === 1) {
                let tmpCh = charStack.pop(); //Pop from stack if closing
                if(tmpCh === undefined) {
                    neededReplacements+=1; //If popped value is undefined, ++neededReplacements
                }
            }
        }
        //Needed Replacements + Stack Length is less than equal to maxReplacement swaps
        //then it's balanced
        //let isBalanced = (neededReplacements + charStack.length)
        //    <= maxReplacementSwaps ? 1 : 0;

        let isBalanced = (neededReplacements <= maxReplacementSwaps
            && charStack.length === 0) ? 1 : 0;
        results.push(isBalanced);
    }
    return results;//it must return an array of integers.
}

console.log(`Is Balanced ${BalancedOrNot(exps, maxR)}`);

/****************************************
 * JAVASCRIPT TYPES EXPLORED
 ***************************************/

//https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch2.md

console.log("/****************************************");
console.log(" * JAVASCRIPT TYPES EXPLORED");
console.log(" ***************************************/");

//The 8 types in Javascript
console.log(typeof undefined === "undefined"); //true
console.log(typeof true === "boolean"); //true
console.log(typeof "" === "string"); //true
console.log(typeof 100 === "number"); //true
console.log(typeof {} === "object"); //true
console.log(typeof Symbol() === "symbol"); // true --- added in ES6

let a = null;
console.log(typeof a === "object" && !a); //null is a type, but typeof returns object. null is never equal to itself
console.log(typeof function t(){} === "function"); //true, functions are actually subtypes of objects (callable Objects)
console.log(typeof [1234] === "object"); //true, arrays are also subtypes of Objects

//In javascript values have types, not variables

//Undeclared vs Undefined

var b;
console.log(typeof b === "undefined"); //Undefined means a variable was declared but no value was set
console.log(typeof c === "undefined"); //Undeclared means the variable was never initiated, still returns undefined

//Proper way to do an existence check
if(typeof a !== 'undefined') { //avoid if(a){} , this would result in an error if a was undeclared
    console.log('Made it in here');
}

//More about the code above found here
// https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch1.md


/****************************************
 * JAVASCRIPT ARRAYS EXPLORED
 ***************************************/
console.log("/****************************************");
console.log(" * JAVASCRIPT ARRAYS EXPLORED");
console.log(" ***************************************/");

//Don't need a predefined size
//Container for multiple onj types

let testArray = [1, "2", [3]];
console.log(testArray.length); // 3
console.log(testArray[2][0]); // 3 multidimensional array


//Sparse Arrays
let sparseArray = [];
sparseArray[0] = 1234;
sparseArray[6] = 12345;
sparseArray["test"] = "test"; //Letter based indexes don't count towards length of string
//PRO TIP: Key/Maps Value Pairs Should be placed in a Javascript Object
console.log(sparseArray);
console.log(sparseArray.length); //The above code is not recommended.
console.log(sparseArray[2]); //Undefined

//How to convert array-like structures to arrays
let liArray = document.getElementsByTagName("li");
console.log(liArray); //HTMLCollection[5]
console.log(liArray.indexOf); //Undefined function

liArray = Array.from(liArray); //Converts Array-Like Object to Array
console.log(liArray); //[]
console.log(liArray.indexOf); //Function

/****************************************
 * JAVASCRIPT STRINGS EXPLORED
 ***************************************/
console.log("/****************************************");
console.log(" * JAVASCRIPT STRINGS EXPLORED");
console.log(" ***************************************/");
//Strings are not an array of characters
let a1 = "foo";
let b1 = ['f', 'o', 'o'];

console.log(a1.length); //3
console.log(b1.length); //3

a1.indexOf('o'); //1
b1.indexOf('o'); //1

var c = a1.concat( "bar" );			// "foobar"
var d = b1.concat( ["b","a","r"] );	// ["f","o","o","b","a","r"]

console.log(c); //foobar
console.log(d); // ['f', 'o', 'o', 'b', 'a', 'r']

console.log(a1 === c); //False
console.log(b1 === d); //False

//Javascript Strings are immutable, where Javascript Arrays are mutable

//Methods that modify strings, must create new strings
c = a1.toUpperCase();
a1 === c;	// false


b1.push( "!" );
b1;			// ["f","O","o","!"]

//Functions that are useful to arrays are not available to Strings
console.log(a1.join); //undefined
console.log(a1.map); // undefined

console.log(b1.join('-')); //f-o-o-!
console.log(b1.map((a) => {
    return a + '.'
}).join("")); //f.o.o.!


//Arrays can be reversed
console.log(b1.reverse()); //! o o f

//Strings require a special trick to reverse them
console.log(a1.split("").reverse().join("")); //oof doesn't work with strings with special chrs

/****************************************
 * JAVASCRIPT NUMBERS EXPLORED
 ***************************************/
console.log("/****************************************");
console.log(" * JAVASCRIPT NUMBERS EXPLORED");
console.log(" ***************************************/");

//Numbers act as integers and doubles in Javascript

//They don't require 0 before or after . (Although recommended)
let num1 = 11.;
let num2 = .11;

console.log(num1); //11
console.log(num2); //0.11

//very large numbers will be displayed in exponential form
let bigNum = 5E10;
console.log(bigNum); //50000000000
bigNum.toExponential();

console.log(bigNum * bigNum); //2.5e+21
console.log(1 / bigNum); // 2e-11

//To Fixed allows you to round and float decimal places
let someNum = 12.36;

console.log(someNum.toFixed(0)); //12
console.log(someNum.toFixed(1)); //12.4
console.log(someNum.toFixed(2)); //12.36
console.log(someNum.toFixed(3)); //12.360
console.log(someNum.toFixed(4)); //12.3600

//To Precision allows you to determine significant digits on a number
console.log(someNum.toPrecision(1)); //1e+1
console.log(someNum.toPrecision(2)); //12
console.log(someNum.toPrecision(3)); //12.4
console.log(someNum.toPrecision(4)); //12.36
console.log(someNum.toPrecision(5)); // 12.360

//Number Literals
//42.toFixed(0) - will give a syntax error
(42).toFixed(0);
0.42.toFixed(0);
42..toFixed(0);
42 .toFixed(0);

//Numbers as Exponents
let oneThousand = 1E3; // 1 x 10 ^ 3
let oneMillionOneHundredThousand = 1.1E6; // 1.1 z 10 ^ 6

//Hexadecimal
console.log(0xf3); //243
console.log(0Xf3); //243

//Octal
console.log(0363); //243
console.log(0o363); //243
console.log(0O363); //243

//binary
console.log(0b11110011); //243
console.log(0B11110011); //243

//funny use case in javascript
console.log(0.1 + 0.2 === 0.3); //false
console.log(0.1 + 0.2 == 0.3); //false
console.log((0.1 + 0.2).toString() == 0.3); //false
//0.30000000000000004

//how to get around this error
function closeEnoughToEqual(n1, n2) {
    return Math.abs(n1 - n2) < Number.EPSILON;
}

console.log(closeEnoughToEqual(0.1 + 0.2, 0.3));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

//Testing for integers
console.log(Number.isInteger(42)); //True
console.log(Number.isInteger(42.0)); //True
console.log(Number.isInteger(42.3)); //False

//Polyfill for this
function isInteger(num) {
    return typeof num === 'number' && num % 1 === 0;
}

console.log(isInteger(42)); //True
console.log(isInteger(42.0)); //True
console.log(isInteger(42.3)); //False

//Testing for safe integer
console.log(Number.isSafeInteger( Number.MAX_SAFE_INTEGER ));	// true
console.log(Number.isSafeInteger( Math.pow( 2, 53 ) ));			// false
console.log(Number.isSafeInteger( Math.pow( 2, 53 ) - 1 ));		// true

//Polyfill for is safe integer
function isSafeInteger(num) {
    return isInteger(num) && Math.abs(num) <= Number.MAX_SAFE_INTEGER;
}
console.log(isSafeInteger( Number.MAX_SAFE_INTEGER ));	// true
console.log(isSafeInteger( Math.pow( 2, 53 ) ));			// false
console.log(isSafeInteger( Math.pow( 2, 53 ) - 1 ));		// true

//Bitwise Operators
let min32Bit = Math.pow(-2, 31);
let max32Bit = Math.pow(2,31)-1;

console.log(min32Bit);
console.log(max32Bit);

console.log((max32Bit * 2) | 0); //Bits Lost
/****************************************
 * Special Numbers
 ***************************************/
console.log("/****************************************");
console.log(" * SPECIAL NUMBERS EXPLORED");
console.log(" ***************************************/");

//null is an empty value
//undefined is a missing value
//In non strict mode you can overwrite undefined(BAD IDEA!!!!!!)

//Void strikes out any value
let randVal = Math.floor(Math.random() * 100);
console.log(randVal);
console.log(void randVal);

//NaN FUN (is a number but an invalid one)
let newVal = randVal / "foo"; //NaN
console.log(newVal); //NaN
console.log(typeof newVal === "number"); //True

//Window Object check
console.log(window.isNaN(newVal)); //true
console.log(Number.isNaN(newVal)); //true
console.log(isNaN(newVal)); //true

//Polyfill
if(!Number.isNaN) {
    Number.isNaN = function(num) {
        return typeof num === "number" && window.isNaN(num)
    }
}

//Other Useful check
function isNaN(num) {
    return num !== num;
}

console.log('Is Null an object: ' + typeof null);

//Void can be used in return statements of a function block

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity


//If value is closer to MAX_NUMBER it will become the Max Number
//If value is closer to INFINITY it will become Infinity
var bigN = Number.MAX_VALUE;	// 1.7976931348623157e+308
bigN + bigN;						// Infinity
console.log(bigN + Math.pow( 2, 970 ));		// Infinity
console.log(bigN + Math.pow( 2, 969 ));		// 1.7976931348623157e+308

console.log(1 / Number.POSITIVE_INFINITY); //0
console.log(1 / Number.NEGATIVE_INFINITY); //-0

//Negative 0

console.log(0 === -0); //true

//Only true way to check for -0
function isNegZero(n) {
    n = Number( n );
    return (n === 0) && (1 / n === -Infinity);
}

console.log(isNegZero(-0));

//Object is to the rescue
console.log(Object.is(NaN, NaN)); //True
console.log(Object.is(0, -0)); //False
console.log(Object.is(-0, -0)); //True

//References
//var a = 2;
//var b = a; // `b` is always a copy of the value in `a`
//b++;
//a; // 2
//b; // 3

//var c = [1,2,3];
//var d = c; // `d` is a reference to the shared `[1,2,3]` value
//d.push( 4 );
//c; // [1,2,3,4]
//d; // [1,2,3,4]

let test = [1, 2, 3];

function fooBar(arr) {
    let x = test; //X and Test point to same reference
    x.push(4); // 4 is pushed onto that reference

    x = [5, 6, 7]; // X points to new array
    x.push(8); //* added
    return x;
}

console.log(fooBar(test)); //5, 6, 7, 8
console.log(test); //1, 2, 3, 4

/****************************************
 * Javascript Natives
 ***************************************/
console.log("/****************************************");
console.log(" * Javascript Natives");
console.log(" ***************************************/");

//https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch3.md