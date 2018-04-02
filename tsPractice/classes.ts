class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); } //Extends base constructor
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) { //Overrides Base Functionality
        console.log("Galloping...");
        super.move(distanceInMeters); // Calls base function move
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

//Supported Access Modifiers (Private, Public, Protected(Constructors can be constructed))
// Can also add readonly modifiers (can not reset)

/*class Person {
    private _name: string;

    constructor(name) {
        this._name = name;
    }

    get name() {
        console.log('CALLING GETTER');
        return this._name; //Using a getter, must target ECMAScript 5 or higher
    }

    set name(name: string) {
        console.log('SETTER IS SET');
        this._name = name; //Using a setter , must target ECMAScript 5 or higher
    }
}

let p = new Person('Test User');
console.log(p.name); */

class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x); //Allowed because its a static property
        let yDist = (point.y - Grid.origin.y); //Allowed because its a static property
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));


//Abstract implementation

abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void { //Implemented in extending class
        console.log("Generating accounting reports...");
    }
}

let department: Department; // ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//department.generateReports(); // error: method doesn't exist on declared abstract type


let department2: AccountingDepartment = new AccountingDepartment();
department2.generateReports();