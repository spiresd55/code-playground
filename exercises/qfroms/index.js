// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stackA = new Stack();
        this.stackB = new Stack();
    }

    add(element) {
        this.stackA.push(element);
    }

    remove() {
        this.moveStackHelper(this.stackA, this.stackB);
        let record = this.stackB.pop();
        this.moveStackHelper(this.stackB, this.stackA);
        return record;
    }

    peek() {
        this.moveStackHelper(this.stackA, this.stackB);
        let record = this.stackB.peek();
        this.moveStackHelper(this.stackB, this.stackA);
        return record;
    }

    moveStackHelper(stack1, stack2) {
        while(stack1.peek()) {
            stack2.push(stack1.pop());
        }
    }
}

module.exports = Queue;
