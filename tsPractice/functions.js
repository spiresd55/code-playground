function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
//lastName = "test" (Default value for parameters)
var result1 = buildName("Bob"); // works correctly now
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
var result3 = buildName("Bob", "Adams"); // ah, just right
console.log(result1); //Bob
console.log(result3); //Bob Adams
//Rest properties ...restOfName is equilavent to using arguments in javascript function block
function buildNameWithRestParam(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
//let buildNameFun: (fname: string, ...rest: string[]) => string = buildName; ^^^ how to use this as a datatype
var employeeName = buildNameWithRestParam("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
