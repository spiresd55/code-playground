interface LabeledString {
    label: string;
}

function printLabel(label: LabeledString) {
    console.log(label.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//Optional Properties
interface SquareConfig {
    color?: string; //This property is optional
    width?: number; //This property is optional
    readonly test?: string;
    options?: Array<Object>; //Array Type
    options2?: ReadonlyArray<number>; //Array that can't be modified
    [propName: string]: any; //Away to declare multiple options
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    //config.test = 1234 results in error due to readonly property
    if (config.color) { //config.clr will result in an error
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black", test: '1234'});


//Interfaces for functions in Typescript
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let search: SearchFunc;

search = function(one, two) {
    console.log(one + ' ' + two);
    return false;
};

search('test', 'test2');

//Interfacing Index Type
/*interface StringArray {
   [index: string] : string;
   //[index: number] : string; dont mix the two
};

let testArr: StringArray;
//testArr[1] = 1234; results in error
testArr['one'] = '1234';*/


//interface SetTimeFunction {
//    (d: Date, d2: Date): void;
//}

//Implementing interface
interface ClockInterface {
    currentTime: Date;
    //setTime: SetTimeFunction;
    setTime:(d:Date)=>void;
};

class Clock implements ClockInterface { //Enforces Types in the clock interface
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number){

    }
}

//Interface Extensions
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

class SquareShape implements Square {
    sideLength: number;
    color: string;
    penWidth: number;
}


//Other Example
class Control {
    private state: any;
}

interface SelectableControl extends Control { //Interfaces extending classes will extend members not implementation
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}
