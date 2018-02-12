// Code goes here


//Let's play with this

//Default this from normal call site

var a = 1234;

function foo() {
    console.log(this.a); //This is equal to global context
}

foo();


function fooStrict() {
    "use strict";
    // console.log(this.a); //Strict mode will make this undefined
    //Strict mode does not allow global context to be binded
}

fooStrict();


//Implicit binding

function fooImplicit() {
    console.log(this.a); //2
}

var obj = {
    a: 2,
    foo: fooImplicit //The obj owns foo, so this will be equal to the object
}

var obj2 = {
    a: 42,
    obj: obj
}

obj.foo();
obj2.obj.foo(); // A will remain 2, top level of object ownership gets this

var test = obj.foo;

test(); //Call site is test, implicit binding lost and default binding takes over
//WOuld have similar behavior if we passed foo function as a callback


//Explicit Binding or hard binding
foo.call(`here: obj`); //This will bind obj to function foo
foo.apply(obj); // This will bind obj to function foo



//Sample of writing a custom bind helper

function bind(fn, obj) {
    return function() {
        return fn.apply( obj, arguments);
    }
}

//Better yet use the built in utility
var foobar = foo.bind(obj);
foobar();


//New Binding

function testObj(a) {
    this.a = a; //This becomes the newly created object
}

let something = new testObj(12345);
console.log(something.a);


//This binding wars
(function() {
    function foo(something) {
        this.a = something;
    }

    var obj1 = {
        foo: foo
    }

    var obj2 = {};

    obj1.foo(2);
    console.log( obj1.a ); //2

    obj1.foo.call(obj2, 3);
    console.log(obj2.a); //3

    var bar = new obj1.foo(4);
    console.log(obj1.a); //2
    console.log(bar.a); //4

})();


console.log(1 == "1.0")

function testSomething(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
}

testSomething(1);

//Properties dont belong to methods in Javascript
var myObj = {
    foo: function() {

    }
}

var someFoo = myObj.foo;

console.log(someFoo); //Both a reference to function
console.log(myObj.foo); // Both a reference to function


//Object duplication
var newObj = JSON.parse(JSON.stringify(myObj)); //wont parse functions
console.log(newObj);

var anotherNewObj = Object.assign({}, myObj, {test: 1234}, {test: 12345});
console.log(anotherNewObj);

//Property Descriptors
console.log(Object.getOwnPropertyDescriptor(anotherNewObj, "test"));

//Can manually define a property
Object.defineProperty(anotherNewObj, "test2", {
    value: 123456,
    writable: false,
    configurable: true,
    enumerable: true
});

console.log(anotherNewObj);

anotherNewObj['testtest'] = 1234567;
anotherNewObj['testtesttest'] = 12345678;

console.log(anotherNewObj);

Object.defineProperty(anotherNewObj, "test3", {
    value: 123456,
    writable: false,
    configurable: false, //Using define property will cause an error
    enumerable: false //Will now show up during loops, can directly access it
});

anotherNewObj.test3 = 6;
console.log(anotherNewObj.test3); //Can't not be overwritten, in strict mode it will cause an error
console.log(anotherNewObj)

for(let k in anotherNewObj) {
    console.log(k); //Test3 will not show up because its enumerable
}

//An object constant can be made by making an objects property writable configurable equal to false

Object.preventExtensions(anotherNewObj);
anotherNewObj.a = 1234;
console.log(anotherNewObj.a); //Will be undefined, preventExtensions dissallows new props. In strcit mode this would thorw an error

let sealedObj = Object.seal({test: 1234, test2: 12345});
console.log(sealedObj); //Makes all props configurable false, and prevents new extensions from being added

let frozenObj = Object.freeze({test: 1234, test2: 12345}); //Calls seal and also makes object writable false
console.log(frozenObj);


//Existance in Javascript
console.log("test" in sealedObj); //Test to see if the property test exists in the sealedObj
console.log(sealedObj.hasOwnProperty("test"));  //Test to see if the property test exists in the sealedObj

//Test if a property is enumerable
console.log(anotherNewObj.propertyIsEnumerable("test3"));
console.log(Object.keys(anotherNewObj)); //Returns all keys of obj only if enumerable
console.log(Object.getOwnPropertyNames(anotherNewObj)); //Returns all keys of obj even if enumerable is false


//Array Iteration
var myArray = [1, 2, 3, 4, 5, 6, 7];

for(var v of myArray) {
    console.log(v);
}

//ForEach
myArray.forEach((val) => {
    console.log(`Val ${val}`);
});

//Every
myArray.every((val) => {
    console.log(`Every ${val}`);

    if(val === 5) {
        return false; //Acts as a break when returned false
    }

    return true;
});

//Some
myArray.some((val) => {
    console.log(`Some ${val}`);

    if(val === 5) {
        return true; //Acts as a break when returned true
    }

    return false;
});

//How to use an iterator for an array, more academic
var it = myArray[Symbol.iterator]();
let shouldContinue = false;
do {
    let val = it.next();
    console.log(`Iterator Value: ${val.value}`);
    shouldContinue = val.done;
} while(shouldContinue === false);


//Writing a custom iterator for an object

let itObj = {
    a: 2,
    b: 3
}

Object.defineProperty(itObj, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: function () {
        var o = this;
        var idx = 0;
        var ks = Object.keys( o );
        return {
            next: function() {
                return {
                    value: o[ks[idx++]],
                    done: (idx > ks.length)
                }
            }
        }
    }
});

var objIt = itObj[Symbol.iterator]();

console.log(objIt.next());
console.log(objIt.next());
console.log(objIt.next());
