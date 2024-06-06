// Start coding here
let add = function (a, b) {
    const result = a + b;
    return result;
};

let subtract = function (a, b) {
    const result = a - b;
    return result;
};

let multiply = function (a, b) {
    const result = a * b;
    return result;
};

let divide = function (a, b) {
    const result = a / b;
    return result;
};

//Stores
const allFunction = [
    {func: add, name: 'add'},
    {func: subtract, name: 'subtract'},
    {func: multiply, name: 'multiply'},
    {func: divide, name: 'divide'},
];

//Sample arguements
const a = 10;
const b = 5;

//Iterate
allFunction.forEach(({func, name}) => {
    console.log(func(a,b))
})