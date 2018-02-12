// Code goes here


//Cheating Lexical Scope


//EVAL CHEAT

function printVars(code, a) {
    eval(code); //Cheats the rules of scope
    console.log('Here is the value of a: ' + a + ' b: ' + b);
}

function printVarsStrict(code, a) {
    "use strict"; //Strict mode will not allow you to cheat lexical scope with eval
    eval(code);
    console.log('Here is the value of a: ' + a + ' b: ' + b);
}

var b = 6;

printVars('var b = 2;', 4); //4, 2
printVarsStrict('var b = 2;', 4); //4, 6


//WITH CHEAT (Depracated and not allowed at all in strict mode)


//Accidental Global Scope

function test() {
    //"use strict";  Using strict mode will cause a ReferenceError to occur
    z = 10;
}

test();
console.log(z); //Javascript will automatically create a global variable if LHS doenst find variable


//Block Scope
function testBlockScope() {
    {
        //How to acheive block scope in Javascript
        let outofscope = 12345;
    }
    //console.log(outofscope); Will cause a reference error
}

testBlockScope();


//IIFE

//Immediately execute code without polluting global scope
(function(val) {
    console.log(val);
})(1234);


//Hoisting

//Variable declarations are hoisted to the top, not assignment
// Function declrations are hoisted before variables
// Function expressions are not hoisted

testHoist(); // Test Hoist Function is hoisted to the top
//testHoist2(); Will return not a function error
console.log(testHoist2); // The variable will remain undefined due to hoisting rules
function testHoist() {
    console.log('Test Hoist');
}

var testHoist2 = function() {
    console.log('Test Hoist 2');
}

function testHoist() {
    console.log('Test Hoist Again') // This function will be hoisted to the top and the other test hoist will be ignored
}


//Closure fun

for(var i = 0 ; i <= 5; i++) { //Using let fixes this
    setTimeout(() => {
        console.log(i); // 6 6 6 6 6 6
    }, 1000)
}

for(let i = 0 ; i <= 5; i++) { //Using let fixes this because it uses a new scope for each iteration
    setTimeout(() => {
        console.log(i); // 0 1 2 3 4 5
    }, 1000)
}

for(var i =0; i <= 5; i++) {
    (function(j) { // Will create its own scope instead of having a closure
        setTimeout(() => {
            console.log(j); //0 1 2 3 4 5
        }, 1000)
    })(i);
}

//Module Fun

function TestModule () {
    let a = "Hello ";

    let printName = function(name) {
        console.log(a + name); //Closure created around A
    }

    return {
        printName: printName
    }
}

//Create AN INSTANCE OF THE MODULE
let instance = TestModule();

instance.printName("David");

function TestAnotherModule(lastName) { //Dependencies
    let a = "Hello ";

    let printName = function(firstName) {
        console.log(a + firstName + " " + lastName);
    }

    return {
        printName: printName
    }
}

let anotherInstance = TestAnotherModule("Spires");
anotherInstance.printName("David");

//Singleton Module

let singleton = (function coolModule() {
    let a = "Hello ";

    let printName = function(name) {
        console.log(a + name); //Closure created around A
    };

    return {
        printName: printName
    }
})();

singleton.printName("David");

//More Modern Module similar to Angular 1.x

var MyModules = (function Manager() {
    var modules = {};

    function define(name, deps, impl) {
        for(let i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }

        modules[name] = impl.apply( impl, deps);
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    }
})();


MyModules.define("bar", [], function() {
    function hello(who) {
        return "Let me introduce you to " + who;
    }

    return {
        hello: hello
    }
});

MyModules.define("foo", ["bar"], function(bar) {
    var hungry = "hippo";

    function awesome() {
        console.log(bar.hello(hungry).toUpperCase());
    }

    return {
        awesome: awesome
    }
});

var testtest = MyModules.get("foo");

testtest.awesome();




//Lexical This

//without

var s = "s1234";

/*function sTest() {
  var s = 3;
  console.log(this.s);
}

sTest();

var sTest2 = () => {
  let s = 3;

  var test = () => {
       console.log(this.s);
  }

  return test;
}

sTest2()();*/

var obj = {
    see: 600,
    print: function() {

        setTimeout(() => {
            console.log(this.see)
        })

    }.bind(this)
}

obj.print();