let currentInput= '0';
let previousInput = '';
let currentOperator = null;
let shouldResetScreen = false;

const display = document.querySelector('.display');
const updateDisplay = () => display.textContent = currentInput;

const clear = () => {
    currentInput = '0';
    previousInput = '';
    currentOperator = null;
    shouldResetScreen = false;
    updateDisplay();
};

const addingNumber = (number) => {
    if (shouldResetScreen) currentInput = '';
    shouldResetScreen = false;
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
};

const chooseOperator = (operator) => {
    if (currentOperator !== null) calculate();
    previousInput = currentInput;
    currentOperator = operator;
    shouldResetScreen = true;
};

const calculate = () => {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    currentOperator = null;
    shouldResetScreen = true;
    updateDisplay();
};

document.querySelector('.clear').addEventListener('click', clear);
document.querySelector('.equals').addEventListener('click', calculate);
document.querySelectorAll('.number').forEach(button =>
    button.addEventListener('click', (event) => addingNumber(event.target.textContent))
);
document.querySelectorAll('.operator').forEach(button =>
    button.addEventListener('click', (event) => chooseOperator(event.target.textContent))
);