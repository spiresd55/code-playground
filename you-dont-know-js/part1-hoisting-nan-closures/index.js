// Code goes here


//Test Some Javascript Concepts Here

//Hoisting example

// Function Hoisting

console.log(foo()); // Will return 3, foo is hoisted to top of file

function foo() {
    return 3;
}

function bar() {
    let result = a * 3;

    var a = 3; // In this case var = undefined will be hoisted to the top
    return result;
}

function fooBar() {
    a = 4;
    var result = a * 3;
    var a; // In this case var a will be hoisted to top of function call
    return result;
}

console.log(bar()); //NAN
console.log(fooBar()); //12


// IIFEs (Immediately Invoked Function Expressions)

(function IIFE() {
    let num = 3;
    console.log(num);
})();

//console.log(num); THIS WOULD CAUSE A REFERENCE ERROR, SINCE NUM LIVES IN IIFE


//CLOSURE EXAMPLE
function calculateSum(x) { // The value of X will have a closure
    return function (y) {
        return x + y;
    }
}

let addTen = calculateSum(10); // X is remembered as 10
let addOneHundred = calculateSum(100); // X is remembered as 100

console.log(addTen(1)); //11 (1 + 10)
console.log(addOneHundred(100)); //200 (100 + 100)


//How to Round in Javascript
let numVal = 30;

numVal = numVal.toFixed(2);
console.log(numVal);


//Module Pattern Example
function User() {
    let username;
    let password;

    function doLogin(usrName, pwd) {
        console.log('LOGGING IN');
        username = usrName;
        password = pwd;
    }

    let publicApi = {
        login: doLogin
    }

    return publicApi;
}

let user1 = User();
user1.login('test', 1234);


//This Play

function fim() {
    console.log(this.bar);
}

var obj1 = {
    bar: "obj1",
    foo: fim
}

fim(); //Method sets this to global scope
obj1.foo(); //This will set to object in this case
fim.call( obj1); // Same as above
new fim(); // This is set to empty object

//Prototype fun

var fizz = {
    a: 42
}


//Create buzz and link it to fizz
var buzz = Object.create(fizz);
buzz.b = "hello world";

console.log(buzz.a); //Inherits from fizz
console.log(buzz.b); //Part of buzz

//NAN IS NOT EQUAL TO ITSELF

//Check if a number is NAN

function isNAN(num) {
    return num !== num; //NAN is not equal to itself
}

console.log(isNAN(5/undefined));
console.log(isNAN(5/1));
