import {ZipCodeValidator} from "./module/ZipCodeValidator";

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string,
    lastName: string
}

function greeter(person: Person) {
    return "Hello, " + person;
}

//contains required properties enforced by interface
let user = new Student("John", "Something", "Joe");

document.body.innerHTML = greeter(user);


//destructoring example

let objA = {a: 123, b: 1234, c: 12345, d: 123456};
let {a: newName, b: newName2, c} = objA;
console.log(newName);
console.log(newName2);
console.log(c);

let arr = [1, 2, 3, 4];
let [first, ...rest] = arr;
console.log(first);
console.log(rest);

let validator = new ZipCodeValidator();
console.log('zipcode: ' + validator.isAcceptable(`12345`));