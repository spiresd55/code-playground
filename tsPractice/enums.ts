//Enums allow us to define a set of named constants. Using enums can make it easier
// to document intent, or create a set of distinct cases. TypeScript provides both
// numeric and string-based enums.

//Numeric Enum
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

//String Enum


enum StringDirection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

console.log(StringDirection.Up);
console.log(StringDirection.Down);
console.log(StringDirection.Left);
console.log(StringDirection.Right);