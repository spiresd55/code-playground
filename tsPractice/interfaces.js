function printLabel(label) {
    console.log(label.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
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
var mySquare = createSquare({ color: "black", test: '1234' });
var search;
search = function (one, two) {
    console.log(one + ' ' + two);
    return false;
};
search('test', 'test2');
