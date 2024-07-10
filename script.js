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
    return array.reduce((product, value) => product / value);
};