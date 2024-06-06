// Start coding here
// Start coding here
//declaration
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

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

