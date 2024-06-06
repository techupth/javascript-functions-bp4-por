// Start coding here
let calculator = {
    add : function (a, b) {
        const result = a + b;
        return result;
    },

    subtract : function (a, b) {
        const result = a - b;
        return result;
    },

    multiply : function (a, b) {
        const result = a * b;
        return result;
    },

    divide : function (a, b) {
        const result = a / b;
        return result;
    },

};

let addResult = calculator.add(10, 20);
let divideResult = calculator.divide(3000, 10);
console.log(addResult);
console.log(divideResult);

