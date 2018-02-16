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