var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person;
}
//contains required properties enforced by interface
var user = new Student("John", "Something", "Joe");
document.body.innerHTML = greeter(user);
//destructoring example
var objA = { a: 123, b: 1234, c: 12345, d: 123456 };
var newName = objA.a, newName2 = objA.b, c = objA.c;
console.log(newName);
console.log(newName2);
console.log(c);
var arr = [1, 2, 3, 4];
var first = arr[0], rest = arr.slice(1);
console.log(first);
console.log(rest);
