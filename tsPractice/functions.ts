function buildName(firstName: string, lastName?: string) { //? allows parameter to be optional
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
//lastName = "test" (Default value for parameters)

let result1 = buildName("Bob");                  // works correctly now
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
console.log(result1); //Bob
console.log(result3); //Bob Adams


//Rest properties ...restOfName is equilavent to using arguments in javascript function block
function buildNameWithRestParam(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

//let buildNameFun: (fname: string, ...rest: string[]) => string = buildName; ^^^ how to use this as a datatype
let employeeName = buildNameWithRestParam("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);

//Overloads must happen in language using typeof operator 