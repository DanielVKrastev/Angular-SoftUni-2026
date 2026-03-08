function identity<T>(arg: T): T {
    return arg;
}
let output = identity<string>("myString");
// type of output will be 'string'
let output2 = identity(5);
// type of output will be 'number'
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

console.log(output);
console.log(output2);
