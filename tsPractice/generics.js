//Generics
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
console.log(myGenericNumber.zeroValue);
console.log(stringNumeric.zeroValue);
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
//loggingIdentity(3); will produce error because doesnt follow rules of interface
loggingIdentity({ length: 2 });
