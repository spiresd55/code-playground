//Enums allow us to define a set of named constants. Using enums can make it easier
// to document intent, or create a set of distinct cases. TypeScript provides both
// numeric and string-based enums.
//Numeric Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
//String Enum
var StringDirection;
(function (StringDirection) {
    StringDirection["Up"] = "UP";
    StringDirection["Down"] = "DOWN";
    StringDirection["Left"] = "LEFT";
    StringDirection["Right"] = "RIGHT";
})(StringDirection || (StringDirection = {}));
console.log(StringDirection.Up);
console.log(StringDirection.Down);
console.log(StringDirection.Left);
console.log(StringDirection.Right);
