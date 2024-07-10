const add = function (a,b) {
    return a + b;
};

const subtract = function (a,b) {
    return a - b;
};

const sumAndSubtract = function (array) {
    return array.reduce((total, current) => {
        if (current >= 0) {
            return total + current;
        } else {
            return total - current;
        }
    },0);