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


//PROTOTYPE CHAPTER BEGINS HERE
let prototypeObj = {
    a: 1234
};

console.log(prototypeObj.a); //Object performs [GET] operation and finds a property on obj

let anotherPrototypeObj = Object.create(prototypeObj);
//AnotherPrototypeObj will not have property a, but the chained prototypeObj will
//Same thing will work using For In loop, will show up as an enumerable property

console.log(`Prototype: ${anotherPrototypeObj.a}`);

console.log("a" in anotherPrototypeObj); //Enumerable
//Object.prototype is the final object in a prototype chain

//Object shadowing can have unexpected results

console.log(prototypeObj.hasOwnProperty("a")); //true
console.log(anotherPrototypeObj.hasOwnProperty("a")); //false

anotherPrototypeObj.a++;

console.log(prototypeObj.a); //1234
console.log(anotherPrototypeObj.a); //1235
console.log(anotherPrototypeObj.hasOwnProperty("a")); //True
//Parent prototype object was not changed, instead new property created with incremented val
//Avoid this by incrementing the parent most prototype in the chain
//Javascript just has objects, classes don't technically exist


//Very Abused Concept In Javascript

function FooBar() {
}

FooBar.prototype.test = function() {
    console.log("Calling test function")
};

let biz = new FooBar(); //New is not actually creating a new copy of the object. Its linking 2 objects to the same prototype chain
console.log(Object.getPrototypeOf( biz )=== FooBar.prototype); // true
console.log(FooBar.prototype.constructor === FooBar); //true,  A constructor is just a reference back to the function
//Constructors are functions with new in front of them, that happens to create new objects

biz.test(); //Biz does not have test function on the object, the FooBar function holds the function, and biz links to it(Delegation)

//Prototypal inheritance
console.log(biz.__proto__); //FooBar
console.log(biz.__proto__.__proto__); // {} or Object
console.log(biz.__proto__.__proto__.__proto__); //null (Null marks the end of prototypal inheritance)
//When javascript checks for a property, it checks to see if the current object has the prop, and it will move up the prototype
//chain until it hits null obj.__proto__ === Object.getPrototypeOf(obj);

// Avoid using new, and use Object.create(inheritedObj) to delegate parent object props and methods
//https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md


//Behavior Delegation Chapter


//Delegation in practice
//OLOO Objects-linked-to-other-objects
var Task = {
    setID: function(ID) { this.id = ID; },
    outputID: function() { console.log( this.id ); }
};

var XYZ = Object.create(Task);

XYZ.prepareTask = function(ID,Label) {
    this.setID( ID ); //Label and id live on the XYZ not the linked Task object
    this.label = Label; //ID is set on XYZ due to the callsite being XYZ
};

XYZ.outputTaskDetails = function() {
    this.outputID(); //Unlike classes, we are not overloading. We are simply extending the parent object and providing more functionality
    console.log( this.label );
};

XYZ.prepareTask(1, 'test1234');
XYZ.outputTaskDetails();



//More info found in this chapter: https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch6.md


//Better way to test if an object is an instance of an object using behavior delegation concepts
if(Task.isPrototypeOf(XYZ)) {
    console.log('THIS IS TRUE');
}

if(Object.getPrototypeOf(XYZ) === Task) {
    console.log('This is also true');
}



