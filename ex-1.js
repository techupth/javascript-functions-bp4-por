// Start coding here
//declaration
function add (a, b) {
    const result = a + b;
    return result;
};

function subtract (a, b) {
    const result = a - b;
    return result;
};

function multiply (a, b) {
    const result = a * b;
    return result;
};

function divide (a, b) {
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

