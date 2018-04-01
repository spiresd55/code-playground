function increment(number) {
    return 1 + number;
}

increment(-499);
increment(400000);
increment(30);
increment(9000);

//* for generators
function *numbers() {
    const result = 1 + 1;
    return 20 + (yield result);
}

const generator = numbers();
console.log(generator.next()); //2
//console.log(generator.next()); //NAN
console.log(generator.next(10)); //30


function *list() {
    yield 1;
    yield 2;
    yield* moreNumbers();
    yield 6;
    yield 7;
}

const generatorList = list();
//console.log(generatorList.next());
//console.log(generatorList.next());
//console.log(generatorList.next());
//console.log(generatorList.next());
//console.log(generatorList.next());
//console.log(generatorList.next());

//const numbers1 = [];
//for(let value of generatorList) {
//    numbers1.push(value)
//}
//console.log(numbers1);


function *moreNumbers() {
    yield 3;
    yield 4;
    yield 5;
}

const generator2 = list();

const values = [];

for(let value of generator2) {
    values.push(value);
}

console.log(values);


class Tree {
    constructor(value = null, children = []) {
        this.value = value;
        this.children = children;
    }

    *printValues() {
        yield this.value;
        for(let child of this.children) {
            yield* child.printValues();
        }
    }
}

const tree = new Tree(1, [
    new Tree(2, [new Tree(4)]),
    new Tree(3)
]);

const values2 = [];
for(let value of tree.printValues()) {
    values2.push(value); //BFS with generators
}
console.log(values2);