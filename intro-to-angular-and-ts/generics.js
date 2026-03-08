function identity(arg) {
    return arg;
}
var output = identity("myString");
// type of output will be 'string'
var output2 = identity(5);
// type of output will be 'number'
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(output);
console.log(output2);
