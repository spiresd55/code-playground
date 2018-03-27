//https://www.thatjsdude.com/interview/js2.html
//https://www.testdome.com/d/JavaScript-interview-questions/2
console.log("/****************************************");
console.log(" * Null Vs Undefined");
console.log(" ***************************************/");

//Variable with no value
let emptyVar;
console.log(emptyVar); //undefined

//Function with implicit returns
function noReturn() {}
console.log(noReturn()); //undefined

//Return statements that return no value
function emptyReturn() {return;}
console.log(emptyReturn()); //undefined

//Non existent properties in an object
let obj = {a: 1234};
console.log(obj.b); //undefined

//Empty function params
console.log(printX()); //undefined
function printX(x) {
    console.log(x); //undefined
}

//Set to value of undefined
let val = undefined;
console.log(val); //undefined

//void expression
console.log(void 1234); //undefined

//undefined global variable
console.log(undefined);

//undefined is value of variable doesnt exist
//null empty or non existent
console.log(null); //null
console.log(null == undefined); //true
console.log(typeof null); //Object (Primitive)


console.log("/****************************************");
console.log(" * Object Equality");
console.log(" ***************************************/");

function isEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a),
        bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

let aObj = {c: 1, b: 2, a: 3};
let bObj = {a: 3, b: 2, c: 1};

console.log(isEqual(aObj, bObj)); //true


console.log("/****************************************");
console.log(" * True or False");
console.log(" ***************************************/");

if('false') {
    console.log(1);
}

if(' ') {
    console.log(2);
}

if('') {
    console.log(3); //Omitted , because its falsy
}

if({}) {
    console.log(4);
}

if([]) {
    console.log(5);
}

if(new String('')) {
    console.log(6);
}

if(new Boolean(false)) {
    console.log(7);
}

console.log(true%1);// 1 remainder 1 == 0


console.log("/****************************************");
console.log(" * Extend Core Type");
console.log(" ***************************************/");


Date.prototype.nextDay = function() {
  let currentDate = this.getDate();
  return new Date(this.setDate(currentDate + 1));
};

let date = new Date();
console.log(date.nextDay()); //gets the next day

console.log("/****************************************");
console.log(" * Is 5 passed");
console.log(" ***************************************/");

function is5Passed() {
    let arr = Array.prototype.slice.call(arguments);
    return arr.indexOf(5) !== -1;
}

console.log(is5Passed(1, 3, 4 , 6 ,7 ,8 ,9, 5)); //true
console.log(is5Passed(1, 3 ,7)); //false

console.log("/****************************************");
console.log(" * Max Value Of An Array");
console.log(" ***************************************/");

function maxArrayValue(arr) {
    return Math.max.apply(null, arr);
}
console.log(maxArrayValue([1,4,7,9,12,13,15,17,10])); //17

console.log("/****************************************");
console.log(" * Is Palindrone");
console.log(" ***************************************/");

function isPalindrome(str) {
    return str === (str.split('').reverse().join(''));
}

console.log(isPalindrome('asa')); //true
console.log(isPalindrome('asdafs')); //false

console.log("/****************************************");
console.log(" * Hoisting");
console.log(" ***************************************/");

var a = 1;
function b() {
    console.log(a);
    a = 10;
    console.log(a);
    return;
    function a() {}
}
b();
console.log(a);

console.log("/****************************************");
console.log(" * Caching A Function");
console.log(" ***************************************/");

function cacheFn(fn) {
    var cache={};

    return function(arg){
        if (cache[arg]){
            console.log('Returning result from cache');
            return cache[arg];
        }
        else{
            console.log('setting cache');
            cache[arg] = fn(arg);
            return cache[arg];
        }
    }
}

let cache = cacheFn(testCache);

function testCache(num)  {
    return num;
}

console.log(cache(2));
console.log(cache(2));
console.log(cache(3));

