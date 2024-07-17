const add = function (a,b) {
    return a + b;
};

const subtract = function (a,b) {
    return a - b;
};

const sumAndSubtract = function (array) {
    return array.reduce((total, value) => {
        if (value >= 0) {
            return total + value;
        } else {
            return total - value;
        }
    },0);
};

const multiply = function (array) {
    return array.reduce((product , value) => product * value);
};

const divide = function (array) {
    if (array.length === 0) throw new Error ("Array cannot be empty")
    return array.reduce((product, value) => product / value);
};

const operate = function (operator, a, b) {
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply([a,b]);
        case '/':
            return divide([a,b]);
        default:
            return "Invalid operator";
    }
};

console.log(operate('+', 42,2));
console.log(operate('-', 60, 5));
console.log(operate('*', 7, 11));
console.log(operate('/', 176, 2));

let currentInput: '';
let previousInput: '';
let currentOperator= null;
let shouldResetScreen = false;

const display= document.querySelector('.display');

const clear = () => {
        currentInput = '';
        currentOperator = null;
        shouldResetScreen = false;
        updateDisplay();
};

const addingNumber = (number) => {
    if (shouldResetScreen) {
        currentInput = '';
        shouldResetScreen = false;
    }
    currentInput += number;
    updateDisplay();
};

const chooseOperator = (operator) => {
    if (currentOperator !== null) calculate();
    previousInput = currentInput;
    currentOperator = operator;
    shouldResetScreen = true;
};